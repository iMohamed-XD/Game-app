# Project Notes

Use this file as the running record for important features, libraries, patterns, and setup decisions added to this project.

When we add a new feature later, update this file with:

- What was added
- Which files changed
- How to use the new code
- Any package installs or setup steps
- Any important warnings, errors, or build notes

## React Query Setup

Added TanStack React Query v4.28 for server-state fetching, caching, loading states, and error handling.

Installed packages:

```txt
@tanstack/react-query@4.28.0
@tanstack/react-query-devtools@4.28.0
```

Install commands used:

```powershell
npm install @tanstack/react-query@4.28 --legacy-peer-deps
npm install @tanstack/react-query-devtools@4.28 --legacy-peer-deps
```

The `--legacy-peer-deps` flag was needed because this app uses React 19, while React Query 4.28 lists peer support for React 16-18.

### Provider

`src/main.tsx` creates a `QueryClient` and wraps the app with `QueryClientProvider`.

React Query Devtools are also added inside the provider:

```tsx
<ReactQueryDevtools />
```

Current query default:

```ts
staleTime: 10 * 1000 // 10s
```

### Data Fetching Pattern

`src/hooks/useData.ts` is the shared hook for fetching list data.

It uses:

- `useQuery<T[], Error>()`
- `queryKey: [endpoint, requestConfig]`
- The existing Axios client from `src/services/apiClient.ts`

Use the hook like this:

```ts
const { data, error, isLoading } = useData<Game>("/games");
```

Important React Query return values:

```ts
isLoading // loading state
error     // Error object, use error.message
data      // can be undefined while loading
```

When mapping data, use optional chaining:

```tsx
data?.map(...)
```

### Files Touched

- `src/main.tsx`
- `src/hooks/useData.ts`
- `src/components/GameGrid.tsx`
- `src/components/GenreList.tsx`
- `src/components/PlatformSelector.tsx`
- `package.json`
- `package-lock.json`

### Verification

The project build passed:

```powershell
npm run build
```

Vite showed a chunk-size warning, but no build error.

## Future Feature Notes

Add new sections below this line whenever we introduce another feature, package, hook, component pattern, or project-level decision.
