# Contributing to AI Tools Directory

Thank you for your interest in contributing to AI Tools Directory! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### Reporting Bugs

If you find a bug, please create an issue with:
- Clear description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Browser and OS information

### Suggesting Features

Feature suggestions are welcome! Please:
- Check if the feature already exists
- Describe the feature clearly
- Explain why it would be useful
- Provide examples if possible

### Adding New AI Tools

To add a new AI tool to the directory:

1. **Fork the repository**
2. **Edit `data/aitools.json`**
3. **Add your tool entry**:

```json
{
  "id": "26",
  "name": "Tool Name",
  "slug": "tool-name",
  "category": "Category Name",
  "description": "Detailed description of the tool (100-200 words)",
  "pricing": "Free|Paid|Freemium|Pay-as-you-go",
  "logo": "https://images.unsplash.com/photo-xxxxx?w=400&h=400&fit=crop",
  "website": "https://tooltool.com",
  "features": [
    "Feature 1",
    "Feature 2",
    "Feature 3",
    "Feature 4"
  ]
}
```

4. **Submit a pull request**

### Code Contributions

#### Prerequisites
- Node.js 18+
- Git
- Code editor (VS Code recommended)

#### Setup Development Environment

```bash
# Fork and clone the repository
git clone https://github.com/yourusername/ai-tools-directory.git
cd ai-tools-directory

# Install dependencies
npm install

# Create a new branch
git checkout -b feature/your-feature-name

# Start development server
npm run dev
```

#### Coding Standards

**TypeScript**
- Use TypeScript for all new files
- Define proper interfaces and types
- Avoid `any` type unless absolutely necessary

**React/Next.js**
- Use functional components
- Implement proper error boundaries
- Follow React hooks best practices
- Use Server Components where possible

**Styling**
- Use Tailwind CSS utility classes
- Follow existing color scheme
- Ensure responsive design
- Test dark mode compatibility

**Code Formatting**
```bash
# Format code before committing
npm run format

# Check formatting
npm run format:check

# Run linter
npm run lint
```

#### Commit Messages

Follow conventional commits:
```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

Examples:
```
feat: Add pagination to explore page
fix: Resolve dark mode toggle issue
docs: Update README with deployment guide
```

#### Pull Request Process

1. **Update your fork**
```bash
git fetch upstream
git merge upstream/main
```

2. **Make your changes**
- Write clean, documented code
- Follow existing patterns
- Add comments for complex logic

3. **Test thoroughly**
- Test all affected pages
- Check mobile responsiveness
- Verify dark mode
- Run build: `npm run build`

4. **Create Pull Request**
- Provide clear title and description
- Reference related issues
- Add screenshots for UI changes
- Request review

5. **Address feedback**
- Respond to review comments
- Make requested changes
- Push updates to your branch

## 📋 Development Guidelines

### Component Structure

```typescript
// components/ExampleComponent.tsx
import { ComponentProps } from "@/lib/types";

interface ExampleComponentProps {
  title: string;
  description?: string;
}

export default function ExampleComponent({ 
  title, 
  description 
}: ExampleComponentProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-4">
      <h2 className="text-xl font-bold">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
```

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Pages: `page.tsx` (Next.js convention)
- Types: `types.ts`

### Folder Organization
```
components/
  ├── ui/           # Reusable UI components
  ├── layout/       # Layout components
  └── features/     # Feature-specific components
```

## 🧪 Testing

Currently, this project doesn't have automated tests. Contributions to add testing are welcome!

### Manual Testing Checklist
- [ ] All pages load without errors
- [ ] Search functionality works
- [ ] Filters apply correctly
- [ ] Sorting works as expected
- [ ] Dark mode toggles properly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Build succeeds

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## ❓ Questions?

If you have questions:
- Check existing issues
- Read the documentation
- Create a new issue with the "question" label

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing! 🙏
