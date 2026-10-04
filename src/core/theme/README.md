# Website theme

Edit `theme.css` to change the website palette. It is imported once in
`src/main.jsx`; component styles and inline React styles use its CSS variables.

Both light and dark OS preferences currently inherit the original light
website palette. `color-scheme: only light` keeps native controls consistent.

To introduce a dark palette later, override variables in the
`prefers-color-scheme: dark` block and set `color-scheme: dark` there.

Use `--color-on-brand` for text on colored cards and buttons, and
`--color-surface` for plain surfaces. Gradients, shadows, and overlays have
their own tokens. Add new UI colors here instead of embedding literal colors
in components. Illustration SVGs and third-party maps retain their asset colors.
