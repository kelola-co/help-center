import type { Article, Category } from './categories';

interface PopularTopicReference {
  categoryId: string;
  articleId: string;
}

export const NEW_USER_CATEGORY_ORDER = [
  'about',
  'getting-started',
  'account',
  'products',
  'suppliers',
  'stock',
  'sales',
  'customers',
  'payment-methods',
  'report',
  'staff',
  'multi-business',
  'catalog',
  'barcode',
  'subscription',
  'features',
  'troubleshooting'
] as const;

export const NEW_USER_ARTICLE_ORDER_BY_CATEGORY: Record<string, string[]> = {
  about: ['what-is-kelola', 'how-to-download', 'data-security'],
  'getting-started': ['quick-start-guide', 'app-navigation'],
  account: ['managing-profile'],
  products: ['adding-products', 'importing-products-bulk'],
  suppliers: ['adding-suppliers'],
  stock: [
    'difference-stock-in-out-audit',
    'record-stock-in',
    'record-stock-out',
    'stock-transfer',
    'managing-stock-alerts',
    'delete-or-edit-record'
  ],
  sales: ['recording-sales', 'managing-transactions'],
  customers: ['adding-customers'],
  'payment-methods': ['adding-payment-methods'],
  report: ['accounting-report', 'stock-report', 'receivables-report', 'expense', 'customers-report'],
  staff: ['understanding-roles', 'invite-staff', 'join-business', 'managing-team'],
  'multi-business': ['creating-businesses'],
  catalog: ['creating-catalogs'],
  barcode: ['scanning-barcodes'],
  subscription: ['how-to-upgrade'],
  features: ['print-invoice', 'barcode-scanner', 'customer', 'vendor'],
  troubleshooting: ['common-issues']
};

const NEW_USER_POPULAR_TOPIC_REFERENCES: PopularTopicReference[] = [
  { categoryId: 'about', articleId: 'what-is-kelola' },
  { categoryId: 'getting-started', articleId: 'quick-start-guide' },
  { categoryId: 'getting-started', articleId: 'app-navigation' },
  { categoryId: 'products', articleId: 'adding-products' },
  { categoryId: 'stock', articleId: 'difference-stock-in-out-audit' },
  { categoryId: 'sales', articleId: 'recording-sales' },
  { categoryId: 'customers', articleId: 'adding-customers' },
  { categoryId: 'report', articleId: 'accounting-report' }
];

const categoryOrderLookup = new Map(
  NEW_USER_CATEGORY_ORDER.map((categoryId, index) => [categoryId, index])
);

const articleOrderLookupByCategory = new Map(
  Object.entries(NEW_USER_ARTICLE_ORDER_BY_CATEGORY).map(([categoryId, articleIds]) => [
    categoryId,
    new Map(articleIds.map((articleId, index) => [articleId, index]))
  ])
);

export function getArticleRankInLearningPath(
  categoryId: string,
  articleId: string
): number | undefined {
  return articleOrderLookupByCategory.get(categoryId)?.get(articleId);
}

export function sortArticlesByLearningPath(categoryId: string, articles: Article[]): Article[] {
  return [...articles].sort((a, b) => {
    const aRank = getArticleRankInLearningPath(categoryId, a.id);
    const bRank = getArticleRankInLearningPath(categoryId, b.id);

    if (aRank !== undefined && bRank !== undefined) return aRank - bRank;
    if (aRank !== undefined) return -1;
    if (bRank !== undefined) return 1;

    return a.title.en.localeCompare(b.title.en);
  });
}

export function sortCategoriesByLearningPath(inputCategories: Category[]): Category[] {
  return [...inputCategories]
    .map((category) => ({
      ...category,
      articles: sortArticlesByLearningPath(category.id, category.articles)
    }))
    .sort((a, b) => {
      const aRank = categoryOrderLookup.get(a.id);
      const bRank = categoryOrderLookup.get(b.id);

      if (aRank !== undefined && bRank !== undefined) return aRank - bRank;
      if (aRank !== undefined) return -1;
      if (bRank !== undefined) return 1;

      return a.title.en.localeCompare(b.title.en);
    });
}

export function pickCategoriesByIds(categories: Category[], orderedCategoryIds: string[]): Category[] {
  const categoryLookup = new Map(categories.map((category) => [category.id, category]));

  return orderedCategoryIds
    .map((categoryId) => categoryLookup.get(categoryId))
    .filter((category): category is Category => Boolean(category));
}

export function getPopularTopicsForNewUsers(
  categories: Category[],
  limit: number = 6
): Array<{ category: Category; article: Article }> {
  const sortedCategories = sortCategoriesByLearningPath(categories);
  const categoryLookup = new Map(sortedCategories.map((category) => [category.id, category]));
  const topics: Array<{ category: Category; article: Article }> = [];
  const seenKeys = new Set<string>();

  for (const reference of NEW_USER_POPULAR_TOPIC_REFERENCES) {
    const category = categoryLookup.get(reference.categoryId);
    if (!category) continue;

    const article = category.articles.find((item) => item.id === reference.articleId);
    if (!article) continue;

    const key = `${category.id}/${article.id}`;
    if (seenKeys.has(key)) continue;

    topics.push({ category, article });
    seenKeys.add(key);
    if (topics.length === limit) return topics;
  }

  for (const category of sortedCategories) {
    for (const article of category.articles) {
      const key = `${category.id}/${article.id}`;
      if (seenKeys.has(key)) continue;

      topics.push({ category, article });
      seenKeys.add(key);
      if (topics.length === limit) return topics;
    }
  }

  return topics;
}
