export const breadCrumbsMap: Record<string, string | ((params: string)=> string)> = {
    '/': "Главная",
    "/blog": "Блог",
    "/blog/:slug": (params) => `Статья`
}