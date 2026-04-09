# Interactive React Calendar Dashboard

A beautifully designed, highly responsive calendar dashboard built with React and Tailwind CSS. This project goes beyond a standard calendar by offering dynamic seasonal theming, multi-day range selection, and a built-in note-taking feature for specific date ranges.

## Features

* **Dynamic Theming:** The calendar automatically updates its color palette, gradients, and hero image based on the current month to reflect the season.
* **Smart Range Selection:** Users can select multiple distinct date ranges (e.g., Feb 1 to Feb 10) by clicking a start and end date. Each range is color-coded for clarity.
* **Range Notes:** Once a range is selected, a dedicated input field appears, allowing users to attach specific notes to that timeframe.
* **Quick Navigation:** "Today", "Yesterday", and "Tomorrow" quick-select buttons jump instantly to relevant dates.
* **Failsafe Hero Images:** The layout features a responsive hero image that gracefully falls back to reliable placeholders if external image links are blocked by networks or ad-blockers.

## Built With

* **React:** For component-based state management and UI rendering.
* **Tailwind CSS:** For rapid, utility-first styling and ensuring a pixel-perfect responsive design.

## Design & Technical Choices

While building this, I focused heavily on UI alignment and responsive behavior:

* **Layout Stability:** I utilized CSS Flexbox (`items-stretch`) to ensure the left-hand hero image and the right-hand calendar grid always maintain equal height on desktop screens, preventing awkward white space.
* **State Management:** I used React's `useState` and `useCallback` to handle complex logic, specifically tracking multiple date ranges and mapping custom notes to unique range IDs.
* **Error Handling for Media:** Instead of relying purely on CSS background images, I implemented standard `<img>` tags with `onError` fallbacks to guarantee the UI never looks broken, even on slow connections.

## How to Run Locally

To get this project running on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/prachi-0208/YOUR_REPO_NAME.git](https://github.com/prachi-0208/calendar-app.git)