### 1. Why is it important to put thought into your IDs & Classes?
IDs and classes are basically the link between your HTML, CSS, and JavaScript. If you name stuff randomly or reuse IDs, things can break or get messy fast. Having clear, specific names makes it way easier to style stuff and hook up your JS logic without confusion. Its just cleaner and makes debugging way less painful.
### 2. What are Data attributes?
They are like custom tags you can stick onto elements, usually starting with `data-`. For example: `<div data-user-id="2025">`. You can grab that with `.dataset.userId` in JS. Super good for tracking info on the page without hardcoding or making your code ugly. They keep things modular and flexible when you’re dealing with dynamic content.
### 3. What is a DOM fragment?
It’s like a temporary sandbox version of the DOM. You can build a bunch of elements in memory without touching the real page, and then just drop them in all at once. This is great for performance because it avoids forcing the browser to rerender every single time you add something.
### 4. What’s the point of a Virtual DOM?
Virtual DOM is like a lightweight copy of the real DOM that frameworks like React use. Instead of updating the actual DOM all the time (which is slow), they update the virtual one first, compare the changes, and then make only the necessary updates to the real DOM. It’s way faster and helps with smoother UI performance.
### 5. Why is className used instead of class?
Because `class` is a reserved keyword in JavaScript. So when you’re accessing or assigning a class to an element in JS, you use `className`. It does the same thing as the HTML `class` attribute, but it's just how JS avoids conflicts with its own language rules.
### 6. addEventListener vs onClick?
`addEventListener` is more flexible. You can add multiple listeners to the same element without one canceling the other. `onClick` is more old-school and can only run one function at a time unless you chain stuff. For projects with modular code or multiple interactions, `addEventListener` is definitely the better option.
