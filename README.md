# Motorcycle Records SPA

Welcome to the Motorcycle Records Single Page Application (SPA) repository! This application allows users to create and manage motorcycle records, browse through a motorcycle catalog, and perform various actions such as user registration, authentication, and CRUD operations. The project structure is built on a local REST service, and automated tests are included.

**Note:** This project is part of a task from [SoftUni](https://softuni.org/).

## Table of Contents
- [Overview](#overview)
- [Technical Details](#technical-details)
- [Application Requirements](#application-requirements)
   - [Navigation Bar](#navigation-bar)
   - [Home Page](#home-page)
   - [Logged-in Page](#logged-in-page)
   - [Register User](#register-user)
   - [Logout](#logout)
   - [Dashboard](#dashboard)
   - [Adding a New Motorcycle](#adding-a-new-motorcycle)
   - [Motorcycle Details](#motorcycle-details)
   - [Editing a Motorcycle Record](#editing-a-motorcycle-record)
   - [Delete a Motorcycle Record](#delete-a-motorcycle-record)
- [Appendices](#appendices)
   - [Using the Local REST Service](#using-the-local-rest-service)
   - [Running the Test Suite](#running-the-test-suite)

## Overview
The Motorcycle Records SPA is a fully functional Single Page Application (SPA) built using HTML, CSS, and JavaScript. It communicates with a local REST service to handle user authentication, motorcycle records CRUD operations, and additional functionalities.

## Technical Details
The project scaffold includes a package.json file with common dependencies. The HTML and CSS files provide the structure and styling for the application. A local REST service is included to handle data and user-related operations.

**Resources:** The project resources, including the project scaffold and local REST service, are provided by [SoftUni](https://softuni.bg/).

## Application Requirements

### Navigation Bar
- Implement a responsive NavBar with dynamic links based on user authentication status.

### Home Page
- A static Home page is implemented using the provided structure.

### Dashboard
- Display a list of motorcycles, fetched from the local REST service.
- Each motorcycle card has a "More Info" button leading to detailed information.

### Adding a New Motorcycle
- Logged-in users can add new motorcycles via a dedicated form.
- Form validation ensures all required fields are filled.

### Motorcycle Details
- Users can view detailed information about a selected motorcycle.
- For creators of a motorcycle record, Edit and Delete buttons are available.

### Editing a Motorcycle Record
- Authors can edit their own motorcycle records.
- The Edit page is pre-populated with existing data, and form validation is implemented.

### Delete a Motorcycle Record
- Logged-in users can delete their own motorcycle records.
- A confirmation dialog is displayed before deletion.

## Appendices

### Using the Local REST Service
- For information on using the local REST service, refer to the [documentation](#).

### Running the Test Suite
- For details on running the automated test suite, refer to the [documentation](#).

