# htmask.js: Because Your Input Fields Need a Disguise

## What is this thing?

`htmask.js` is a lightweight, no-dependency JavaScript library for masking input fields. It's perfect for when you want to force your users to enter data in a specific format, like a phone number, a date, or a secret agent code. Or maybe you just like the look of masked inputs. We don't judge.

## How to use this marvel of modern engineering

1.  **Include it:** Add `htmask.js` (or `htmask.min.js` if you're into that whole "optimization" thing) to your HTML file.

    ```html
    <script src="htmask.js"></script>
    ```

2.  **Apply the mask:** Add a `mask` attribute to any `<input>` element you want to mask. The value of the attribute is the pattern the input should follow.

    -   `0`: Represents a digit (0-9).
    -   `A`: Represents a letter (a-z, A-Z).
    -   Any other character is a literal.

    ```html
    <!-- Phone Number -->
    <input type="text" mask="(00) 00000-0000">

    <!-- Date -->
    <input type="text" mask="00/00/0000">

    <!-- License Plate -->
    <input type="text" mask="AAA-0000">
    ```

3.  **Watch the magic happen:** As the user types, `htmask.js` will automatically format the input to match your mask. It's so simple, even a developer could do it.

## Why would you use this?

Because unformatted input is a crime against humanity. And because it's fun to watch the input change as you type. It's the little things in life, you know?

So go ahead, give your input fields the masks they deserve. They'll thank you for it. Probably.