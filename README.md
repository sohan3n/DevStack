# Dev Stack

Curated tools, technologies, and resources for developers building modern software.

---

## 🚀 Tech Stack
- **Core**: React, Vite, TypeScript
- **Styling UI**: Tailwind CSS, DaisyUI
- **Feedback**: `react-toastify`
- **Data**: Static JSON (`/public/data.json`)

---

## ✨ Features
1. **Interactive Stack Builder**: Real-time add/remove workflow managing selected developer tools in state, complete with a clean empty-state fallback prompt.
2. **JSON-Driven Tech Catalogue**: Dynamic rendering of tech items loaded from `/public/data.json`.
3. **Adaptive Multi-View Layout & Feedback**: Responsive multi-column desktop vs. simplified mobile layouts paired with instant `react-toastify` confirmation alerts.

---

## 🧠 React Practice Q&A

### i. What is JSX, and why is it used in React?
JSX is syntactic sugar that lets us write HTML-like markup inside JavaScript files. Under the hood, it compiles down to standard JavaScript function calls (`React.createElement`). We use it because visualizing component trees with familiar HTML tags is vastly more readable and maintainable than writing nested JS creation methods.

### ii. What is the difference between props and state?
- **Props**: External configurations passed *down* from a parent component (read-only for the child). Think of them like function arguments.
- **State**: Internal memory owned and managed *inside* the component. When state updates via its setter function, React re-renders the component.

### iii. What does the `useState` hook do, and where did you use it in this project?
`useState` returns a stateful value and a function to update it. I used it to track the user's active technology stack array (`const [stack, setStack] = useState([])`), allowing us to push or filter out items interactively.

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side-effects (fetching data, subscriptions, manual DOM changes) outside normal render flow. I needed it with an empty dependency array (`[]`) to fetch `/public/data.json` *once* on initial component mount rather than firing a fetch on every render cycle.

### v. Why does every item in a `.map()` list need a unique `key` prop?
Keys give React a stable identity for each list item. During re-renders, additions, or deletions, React uses keys to diff the old and new virtual DOM tree efficiently, preserving component state and avoiding UI glitching. (Using unique IDs like `tech.id` beats array index keys when list mutation happens).

### vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering means rendering different UI output based on application logic (using ternaries or logical operators). I used it in the stack sidebar to show an empty state fallback when no technologies are added yet:
```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  stack.map((item) => <StackItem key={item.id} data={item} />)
)}
```

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent -> Child**: Pass data down via props (attributes), e.g., `<TechnologyCard tech={item} />`.
- **Child -> Parent**: Pass a callback function down via props, e.g., `onAdd={handleAddToStack}`, and invoke it inside an event handler on the child: `<button onClick={() => onAdd(tech.id)}>Add</button>`.\n
