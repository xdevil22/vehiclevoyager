# Landing Page Content Workflow

## How to add a new landing page

1. Duplicate an existing content file such as `car-rental-phoenix.ts`.
2. Rename the file to match the new page slug, for example `boat-rental-miami.ts`.
3. Update these fields in the duplicated file:
   - `slug`
   - `title`
   - `seoTitle`
   - `seoDescription`
   - `hero`
   - `sections`
4. The landing page renderer automatically discovers new content files in this folder.

## Supported section types

- `content`: Paragraph-driven text blocks
- `featureGrid`: Three- or four-column benefit cards
- `tips`: boxed list of rental tips
- `faq`: expandable FAQ items
- `cta`: final call-to-action section
- `internalLinks`: quick navigation links to related site pages

No additional code changes are required for standard page creation once the page file is added.
