export const createPageUrl = (pageName) => {
    if (!pageName) return '/';
    if (pageName === "Portfolio") {
        return "/";
    }
    // This line converts "HappyTrailsCaseStudy" to "happy-trailscasestudy"
    return `/casestudy/${pageName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
};