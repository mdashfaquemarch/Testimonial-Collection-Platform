
# Product Requirement Document (PRD)

##  TESTIMONIAL COLLECTION PLATFORM

### 1. Product Overview

- **Product Name :** TESTIMONIAL COLLECTION PLATFORM BACKEND (TCP)
- **Version:** 1.0.0 
- **PRODUCT TYPE:** BACKEND API FOR TCP


TESTIMONIAL COLLECTION PLATFORM is a Restful API  designed to support and collect testimonials from users/customers. This system let admin to create workspace to collect testimonials from users.

### 2. Target Users

- **Admin :** create workspace for testimonials

### 3. Core Features

#### 3.1 User Authentication Only For Admin
- **User  logIn :** Google Login / signup
#### 3.2 Workspace Management
- **Workspace Creation :** Create workspace with name and description etc.
- **Workspace Listing :** Listing the users workspaces
- **Workspace Details :** Get the workspace Details
- **Workspace Updates :** update the workspace Details
- **Workspace Deletion :** deletion of workspace
#### 3.3 Testimonial Management

#### 3.4 Like Management

#### 3.5 System Health
- **Helath check :** API endpoint for system status monitoring

### **4. Technical Specification**

**Authentication Routes(`/api/v1/auth`)**
- `POST /register` - User registration/ Login

**Workspace Routes(`/api/v1/workspace`)**
- `POST /` - workspace creation
- `GET /:workspaceId` - get workspace By ID
- `DELETE /:workspaceId` - delete workspace By ID
- `PUT /:workspaceId` - Update workspace By ID

**Testimonial Routes(`/api/v1/auth`)**
- `POST /register` - User registration

**Like Routes(`/api/v1/auth`)**
- `POST /register` - User registration

**System Routes(`/api/v1/auth`)**
- `POST /register` - User registration