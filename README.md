

##### Installation Setup

npm create vite@latest my-project -- --template react
cd my-project


npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



@tailwind base;
@tailwind components;
@tailwind utilities;


npm run dev


export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}


#####
* Traditionally the same class name applies different styles on hover

.btn-primary {
  background-color: #0ea5e9;
}
.btn-primary:hover {
  background-color: #0369a1;
}

* Modern way
<button class="bg-sky-500 hover:bg-sky-700 ...">
  Save changes
</button>


###### Break Points

Breakpoint prefix	Minimum width	CSS
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }




<!-- https://nerdcave.com/tailwind-cheat-sheet -->