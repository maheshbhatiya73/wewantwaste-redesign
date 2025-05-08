<<<<<<< HEAD
# wewantwaste-redesign
=======
Skip Selection UI – We Want Waste

redesigned Skip Selection page for the company We Want Waste, built with Next.js and Tailwind CSS, using Framer Motion for animations and React Icons for visual cues.

Overview

interface : {
    View available skip sizes
    Understand hire period and pricing
    Select the appropriate skip
    Proceed to the next steps in process
}

Folder Structure : {
    /src/app
    /components
    SkipCard.tsx  - Card UI for each skip
    SkipList.tsx  - Main UI listing all skips
    /data
    SkipsData.ts  - Skip item interface
    /lib
    fetchSkips.ts - Function to simulate fetching skips
    fetchSkips.ts - Entry point rendering the skip list
    /public/skip.jpg           - Skip image
}

Features : {
    Animated navigation steps for the multi-step booking process
    Animated skip card display with entry transitions
    Card selection with visual confirmation
    Responsive layout for mobile, tablet, and desktop
    Clean code structure with reusability and readability
}

Steps Included in UI : {
    Postcode Entry
    Waste Type Selection
    Skip Selection (This Page)
    Permit Check
    Choose Delivery Date
    Payment
}

How to Run : {
    Clone this repository.

    Install dependencies using:
    npm install

    Run the development server:
    npm run dev

    Build project:
    npm run build

    Production:
    npm run dev

    http://localhost:3000
}


live demo : vercel 



Built by Mahesh Bhatiya for the frontend challenge by We Want Waste.

thank you.
>>>>>>> 820c3c9 (redesigned ui final push)
