# WeWantWaste-Redesign

### Skip Selection UI – We Want Waste

A redesigned Skip Selection page for the company *We Want Waste*, built with **Next.js**, **Tailwind CSS**, using **Framer Motion** for animations, and **React Icons** for visual cues.

---

### Overview

This UI allows users to:

- View available skip sizes
- Understand hire period and pricing
- Select the appropriate skip
- Proceed to the next steps in the booking process

---

### Folder Structure

/src/app
/components
SkipCard.tsx - Card UI for each skip
SkipList.tsx - Main UI listing all skips
/data
SkipsData.ts - Skip item interface
/lib
fetchSkips.ts - Function to simulate fetching skips
/public
skip.jpg - Skip image


---

### Features

- **Animated navigation steps** for the multi-step booking process
- **Animated skip card display** with entry transitions
- **Card selection with visual confirmation**
- **Responsive layout** for mobile, tablet, and desktop
- **Clean code structure** with reusability and readability

---

### Steps Included in UI

1. Postcode Entry
2. Waste Type Selection
3. **Skip Selection** (This Page)
4. Permit Check
5. Choose Delivery Date
6. Payment

---

### How to Run

1. Clone this repository.
2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Build the project:

    ```bash
    npm run build
    ```

5. For production, run:

    ```bash
    npm run dev
    ```

6. Open in your browser:

    [http://localhost:3000](http://localhost:3000)

---

### Live Demo

You can view the live demo here:

[We Want Waste – Skip Selection UI](https://wewantwaste-redesign-three.vercel.app/)

---

### Built by Mahesh Bhatiya

Frontend challenge by *We Want Waste*.

Thank you!
