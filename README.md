# Frontend Code Challenge

## Before Starting

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/vitorsinedino/frontend-code-chalenge.git
   ```
2. **Create a Branch:**
   Create a branch named after yourself in the following format:

   ```
   your-name-dev
   ```

   For example, if your name is Vitor Sinedino, your branch would be:

   ```
   vitor-sinedino-dev
   ```

3. **Shopify CLI Setup:**
   To develop with the Shopify store, install the Shopify CLI:

   - [Shopify CLI Installation Guide](https://shopify.dev/docs/api/shopify-cli#installation)
   - [Getting Started with Shopify Themes](https://shopify.dev/docs/storefronts/themes/getting-started/create)

4. **Dev Store Access:**
   You will receive an invite to the dev store, so there’s no need to create a Shopify Partner account.

5. **Final Submission:**
   After completing both tasks:
   - Create a pull request to the `main` branch.
   - A quick review will follow. If approved, a virtual meeting will be scheduled for further discussion regarding the position.

## Initial Setup

1. After setting up the repo and installing the Shopify CLI, navigate to the theme folder.
2. Run the following command:

   ```bash
   shopify theme dev --store frontend-test-sinedino.myshopify.com
   ```

   - This will prompt a login request. Log in using the email you used to submit your resume.
   - Once logged in successfully, you should see a confirmation in the terminal.
   - Press `Ctrl + C` to terminate the process.

3. Run the command again to start the dev environment:
   ```bash
   shopify theme dev --store frontend-test-sinedino.myshopify.com
   ```
   This will initiate the Shopify development server, loading all assets from the repository and providing a real-time development environment.

## Tasks

### Task 1: Create a Slider for Related Products

- **Objective:** Make the related products on the Product Page a slider.
- **Example:** Use Flickity.js for the slider functionality.
- **Acceptance Criteria:** The slider should function smoothly on both desktop and mobile devices.

![Task 1 Example](https://i.ibb.co/jzJmF8N/Captura-de-tela-2024-11-12-173927.png)

### Task 2: Add "Add to Cart" Button to Related Product Card

- **Objective:** Create an "Add to Cart" button on each related product card.
- **Acceptance Criteria:** The button should add the product to the cart. It should either:
  - Open the drawer cart, or
  - Redirect to the cart page upon adding the item.

![Task 2 Example](https://i.ibb.co/RzLTcGf/Sem-t-tulo.png)

---

This README outlines the necessary setup steps and requirements for completing the tasks. Follow it closely to ensure your environment is ready and tasks are implemented correctly.
