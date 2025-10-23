# htmask.js: Because Your Input Fields Need a Disguise

`htmask.js` is a lightweight, zero-dependency JavaScript library for creating input masks. It's perfect for guiding users to enter data in a specific format, like phone numbers, dates, or secret agent codes.

## Features

*   **Lightweight and Dependency-Free:** No jQuery, no frameworks, just pure vanilla JavaScript.
*   **Declarative:** Simply add a `mask` attribute to your input fields.
*   **Automatic Formatting:** Formats user input on the fly.
*   **Handles Pasting:** Pasted content is also formatted correctly.
*   **Auto-Advancing Cursor:** Automatically skips over literal characters in the mask for a smoother user experience.

## How to Use

1.  **Include the script:**

    ```html
    <script src="htmask.js"></script>
    ```
    Or for the minified version:
    ```html
    <script src="htmask.min.js"></script>
    ```

2.  **Add the `mask` attribute:**

    Add a `mask` attribute to any `<input>` element. The value of the attribute is the pattern the input should follow.

    *   `0`: Represents a digit (0-9).
    *   `A`: Represents a letter (a-z, A-Z).

    ```html
    <!-- Phone Number -->
    <input type="text" mask="(00) 00000-0000">

    <!-- Date -->
    <input type="text" mask="00/00/0000">

    <!-- License Plate -->
    <input type="text" mask="AAA-0000">
    ```

## `mask-auto-advance`

For an even smoother experience, you can add the `mask-auto-advance` attribute. When set to `true`, the cursor will automatically insert and jump over the mask's separators as the user types.

```html
<input type="text" mask="0000-00-00" mask-auto-advance="true">
```

**Example without `mask-auto-advance`:**
User types `2025` -> `2025`

**Example with `mask-auto-advance`:**
User types `2025` -> `2025-`

## Why use htmask.js?

Because unformatted input is a pain. `htmask.js` is a simple, no-fuss way to make your forms more user-friendly. It's the little things in life, you know?

So go ahead, give your input fields the masks they deserve. They'll thank you for it. Probably.
