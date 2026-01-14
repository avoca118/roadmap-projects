# Cookie Consent Banner

**Focus:** Basic DOM manipulation & event handling

A beginner-friendly JavaScript project that demonstrates how to create a simple **cookie consent popup**. The banner appears when the user visits the page and disappears once consent is accepted. User consent is persisted using browser storage to prevent the popup from appearing on subsequent visits.

## Project Overview

Many websites display a cookie consent banner to inform users about the use of cookies and request their permission. This project replicates that behavior using **vanilla JavaScript**, focusing on fundamental DOM manipulation techniques.

## Features

- Displays a cookie consent popup on page load
- Allows users to accept or close the popup
- Persists user consent using `localStorage`
- Prevents the popup from reappearing on future visits
- Clean and responsive UI

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

## How It Works

1. The cookie banner appears when the page loads.
2. When the user clicks **“Accept Cookies”**, consent is saved in `localStorage`.
3. The popup is hidden immediately.
4. On subsequent visits, the popup does not appear if consent has already been given.

## Project URL

https://roadmap.sh/projects/cookie-consent
