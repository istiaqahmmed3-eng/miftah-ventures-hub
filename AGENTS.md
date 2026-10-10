<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared founder-site navigation, footer, and reusable venture content in `src/components/founder-site.tsx`; leaf routes own their page content and metadata so every section is independently shareable.
- Define visual roles and responsive editorial styles in `src/styles.css` and use the existing Button variants for actions to maintain a consistent design system.
- Label traction with its public reporting date and source rather than presenting historical figures as current live metrics.
- Keep static editorial content in `src/lib/blog-posts.ts` and render it through the blog index and dynamic article route; sourced summaries must link to their original public update rather than imply newly authored personal essays.
- Use uploaded product logos through Lovable Assets pointers, with a separate local favicon copy; preserve the personal header identity independently of product branding.
