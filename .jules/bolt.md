## 2025-05-14 - [Eager Seed Loading]
**Learning:** Sequential async loading of multiple small modules in a useEffect causes a measurable delay and "pop-in" effect. Using Vite's eager glob import allows for zero-latency access to static data modules.
**Action:** Use { eager: true } with import.meta.glob for static data collections to eliminate async overhead and simplify component state management.
