# Project's Title
**Taguig Disaster Access (Qat)**
A comprehensive cross-platform mobile application developed to enhance disaster preparedness and emergency response for the residents of Taguig City.

## Project Description

The Taguig Disaster Access (Qat) application serves as a critical bridge between citizens and emergency services. In the event of a natural disaster or local emergency, timely communication and accurate information save lives. This application was developed as a thesis project to address the need for a centralized, easy-to-use platform for the residents of Taguig.

### Key Features
*   **Emergency Reporting:** Real-time reporting of incidents to local authorities.
*   **SOS Notifications:** Immediate distress signals for life-threatening situations.
*   **Location-Based Services:** Identification of nearby evacuation centers and critical facilities using GPS.
*   **Contact Hotlines:** A curated directory of landline and emergency hotlines for quick access.
*   **User Profiles & History:** Secure account management using Firebase and persistent data storage.
*   **Data Analytics:** Integrated Aptabase for monitoring user interactions and improving response strategies.

### Why These Technologies?
*   **React Native & Expo:** Chosen for cross-platform compatibility (iOS and Android) from a single codebase, ensuring maximum reach among citizens.
*   **Firebase:** Utilized for its robust authentication system (Firebase Auth), real-time database (Firestore) for reports, and storage (Firebase Storage) for profile images.
*   **Aptabase:** Implemented for privacy-respecting analytics to understand app usage patterns and optimize the user experience.

### Challenges and Future Goals
*   **Challenges:** Integrating real-time location services with high accuracy while maintaining battery efficiency, and ensuring offline capability for critical information.
*   **Future Goals:** Implementing Google Maps API for more detailed routing, adding a more detailed admin dashboard for emergency responders, and integrating Push Notifications for real-time disaster alerts.

## Table of Contents
- [1. Project Description](#2-project-description)
- [2. How to Install and Run the Project](#4-how-to-install-and-run-the-project)
- [3. How to Use the Project](#5-how-to-use-the-project)
- [4. Include Credits](#6-include-credits)
- [5. Add a License](#7-add-a-license)

## How to Install and Run the Project

To set up the development environment and run the project locally, follow these steps:

### Prerequisites
*   [Node.js](https://nodejs.org/) (v16.x or later recommended)
*   [Git](https://git-scm.com/)
*   [Expo Go app](https://expo.dev/expo-go) (for mobile testing)

### Installation Steps
1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/sonlast/csci-thesis-taguig-disaster-preparedness-crossplatform-mobile-app-rn-expo-firebase.git
    ```
2.  **Navigate to the Project Directory:**
    ```bash
    cd csci-thesis-taguig-disaster-preparedness-crossplatform-mobile-app-rn-expo-firebase/Qat
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    ```
4.  **Start the Expo Development Server:**
    ```bash
    npx expo start
    ```

## How to Use the Project

Once the project is running:
1.  **Scan the QR Code:** Open the Expo Go app on your physical device and scan the QR code displayed in your terminal or browser.
2.  **Authentication:** You can sign up for a new account or log in using existing credentials.
    *   *Tryout Account:* `sonilalto@gmail.com`
    *   *Password:* `sonilalto`
3.  **Reporting:** Use the "Reporting" module to submit incident details.
4.  **Emergencies:** Access the "SOS" or "Hotlines" sections for immediate assistance.

## Credits

### Author
*   **Ijerson Lastimosa Ilalto** - Lead Developer & Thesis Author - [GitHub Profile](https://github.com/sonlast)

### Acknowledgments
*   **React Native & Expo Community:** For the extensive documentation and plugins.
*   **Firebase:** For providing a scalable backend infrastructure.
*   **Aptabase Team:** For the privacy-focused analytics library.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
