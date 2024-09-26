
XHAW5112 
MILESTONE 3	
Below is the detailed explanation of milestone 3
ST10447252- Angel Khumalo
Add member.
Add member.	

 
Mobile Application
The mobile application was programmed by Angel Khumalo, using React native, Expo toolchain, typescript and routing system for calculation basis. The expo routing was designed using the react framework will all images and icons referenced in the bibliography below.


Mobile Application Screenshots.
Below are the screenshots of the code as well as the pages 
 

Home Page: The Home page welcomes the user to the application with two navigation button that navigate the user to the other pages.



 

Profile Page/ Offer Page

  


 
Summary of courses Pages
 


 
First Aid Life skills Pages
 

 

 

 

  
 

 


Detailed Explanation:  


Home Page
•	Features:
o	Logo: Display the logo for "Empowering the Nation."
o	Brief Introduction: A short description of the business and its purpose.
o	Navigation Options:
	Summary of Six-Month Courses: Link to a page listing all the six-month courses.
	Summary of Six-Week Courses: Link to a page listing all the six-week courses.
	Calculate Total Fees: Link to a page where users can calculate fees based on selected courses.
	Contact Details: Link to a page displaying contact details for three Johannesburg venues.
•	Goal: Provide users with an overview of the company and direct access to course summaries, fee calculations, and contact info.
2. Summary of Six-Month Courses
•	Features:
o	List of Courses: Display all the six-month courses (First Aid, Sewing, Landscaping, Life Skills) with a short description and fees next to each course.
o	Course Details: Each course should have a hyperlink that directs to a detailed page for that specific course (see course detail pages below).
•	Goal: Allow users to explore the available six-month courses and navigate to the detailed page for each course.
3. Summary of Six-Week Courses
•	Features:
o	List of Courses: Display all six-week courses (Child Minding, Cooking, Garden Maintenance) with a short description and fees.
o	Course Details: Each course should have a hyperlink that directs to a detailed page for that course.
•	Goal: Allow users to explore the short-term six-week courses and see detailed information.
4. Course Detail Pages
•	Features:
o	Course Information: Each course detail page should include:
	Course Name.
	Purpose of the Course.
	Content: A breakdown of what the course covers.
	Fees: Display the price for that course.
o	Add to Cart Button: A button for users to add the course to their cart for later checkout.
•	Goal: Give detailed information about each course and allow users to add courses to their cart for enrollment.
5. Cart Functionality
•	Cart Icon: Display an animated cart icon in the top-right corner of every screen/page, showing the number of courses added to the cart.
•	Features:
o	When the user taps the cart icon, it should show a list of the courses added to the cart, along with the course name, description, and fees.
o	Option to Remove: Users can remove courses from the cart.
•	Goal: Keep track of selected courses and allow users to manage their course selections before proceeding to checkout.
6. Calculate Total Fees
•	Form:
o	Checkbox List of Courses: Display a list of all courses (both six-month and six-week), allowing users to select which ones they want to calculate fees for.
o	Course Fees: Show the fee for each course next to the checkbox.
•	Discount Logic:
o	1 course = no discount.
o	2 courses = 5% discount.
o	3 courses = 10% discount.
o	More than 3 courses = 15% discount.
•	VAT (15%): After applying the discount, add 15% VAT to the total amount.
•	Display Total Fee: Once the user selects courses and clicks the "Calculate" button, display the total fees including discounts and VAT.
•	Form Submission: Users should be able to enter their contact information (name, phone, email) and request a consultant to contact them for course booking.
•	Goal: Allow users to see a calculated total for the courses they are interested in, including discounts and VAT.
7. Checkout Page
•	Features:
o	List of Selected Courses: Display the list of courses the user has added to the cart.
o	Total Fees: Show the calculated fees, including any applicable discounts and VAT.
o	User Information Form: Ask for the user's contact details (name, phone number, and email).
o	Submit Button: A button to submit the request and send the course selection and contact details to the company.
•	Backend Interaction: On submission, the selected courses, total fees, and user details are sent to the backend for processing. The user gets a confirmation message that a consultant will contact them.
•	Goal: Finalize the user's course selection and allow them to submit their details for booking confirmation or further consultation.
8. Contact Details Page
•	Features:
o	Phone Number.
o	Email Address.
o	Physical Address for the three Johannesburg venues.
o	Map: Optionally, you could integrate Google Maps to display the venue locations.
•	Goal: Provide users with contact information and easy navigation to the venues.
________________________________________
Navigation Flow (Summary):
1.	Home Page → (Links to)
o	Summary of Six-Month Courses → Detailed Course Pages → Add to Cart.
o	Summary of Six-Week Courses → Detailed Course Pages → Add to Cart.
o	Calculate Total Fees → (Check the list of courses and calculate the total).
o	Contact Details.
2.	Cart/Checkout Flow:
o	User adds courses to the cart from any course detail page.
o	Cart Icon (always visible) → View Cart.
o	Checkout Page → Show total fees, request contact details, and submit the request for course booking.
 
Reference List/Bibliography

•  Expo. (n.d.) Installation of Expo CLI. Available at: https://docs.expo.dev/get-started/installation/ (Accessed: 21 September 2024).
•  Expo. (n.d.) Upgrading Expo SDK. Available at: https://docs.expo.dev/workflow/upgrading-expo-sdk/ (Accessed: 21 September 2024).
•  Facebook Developers. (2020) Using the Facebook SDK with Expo. Available at: https://developers.facebook.com/docs/app-events/getting-started-app-events-expo/ (Accessed: 21 September 2024).
•  iOS Developer Documentation. (n.d.) Using Xcode for iOS Development. Available at: https://developer.apple.com/xcode/ (Accessed: 21 September 2024).
•  Medium. (2022) How to Use React Navigation in React Native by John Smith. Available at: https://medium.com/react-native-navigation-tutorial (Accessed: 21 September 2024).
•  Microsoft Docs. (n.d.) React Native for Windows. Available at: https://learn.microsoft.com/en-us/windows/dev-environment/rnw/ (Accessed: 21 September 2024).
•  React Native Community. (n.d.) Community Libraries. Available at: https://reactnative.dev/docs/community (Accessed: 21 September 2024).
•  React Native Documentation. (n.d.) React Native Getting Started Guide. Available at: https://reactnative.dev/docs/getting-started (Accessed: 21 September 2024).
•  React.dev. (n.d.) Introducing Hooks. Available at: https://react.dev/docs/hooks-intro (Accessed: 21 September 2024).
•  React.dev. (n.d.) React 18 Upgrade Guide. Available at: https://react.dev/blog/2022/03/08/react-18-upgrade-guide (Accessed: 21 September 2024).
•  Stack Overflow. (2023) Expo vs React Native CLI for iOS development?. Available at: https://stackoverflow.com/questions/68594514/expo-vs-react-native-cli-ios (Accessed: 21 September 2024).
•  Vercel. (n.d.) Next.js: React Framework for Production. Available at: https://nextjs.org/ (Accessed: 21 September 2024).
•  Wix Engineering. (2021) React Native Navigation. Available at: https://wix.github.io/react-native-navigation/ (Accessed: 21 September 2024).

	
	
	

 


 

