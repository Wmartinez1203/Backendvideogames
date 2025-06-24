# TiendamaniaGG

**TiendamaniaGG** is a production-grade, microservices-oriented back-end that emulates a modern digital video game store.

## Overview

TiendamaniaGG consists of 30 independent services, including:

1. User Management
2. Authentication
3. Authorization
4. User Profiles
5. Catalog
6. Game Details
7. Game Reviews
8. Game Ratings
9. Wishlist
10. Shopping Cart
11. Sales
12. Orders
13. Payments
14. Invoices
15. License Delivery
16. License Validation
17. Download Management
18. Notification Service
19. Email Service
20. Reporting
21. Analytics
22. Recommendation Engine
23. Search
24. Inventory Management
25. Price Management
26. Promotions
27. Customer Support
28. Feedback Collection
29. Logging
30. Monitoring

These services are implemented using a variety of communication protocols and technologies, such as REST, GraphQL, gRPC, WebSocket, WebHook, SOAP, and event streaming.

## Polyglot Persistence

The platform leverages a polyglot-persistence strategy, utilizing the following databases:

- **PostgreSQL:** Relational data storage
- **MySQL:** Relational data storage
- **MongoDB:** Document-oriented storage
- **Cassandra:** Distributed, scalable storage
- **Redis:** In-memory caching and session management
- **Neo4j:** Graph data storage

Each microservice is designed to use the most appropriate database technology for its requirements.

## Security

TiendamaniaGG enforces zero-trust principles through:

- JSON Web Tokens (JWT)
- Cross-Origin Resource Sharing (CORS)
- HTTPS

## Deployment

- **CI/CD:** Automated with GitHub Actions
- **Containerization:** Docker
- **Cloud:** Deployable on AWS EC2

## Documentation

This report covers:

- Project motivation
- Scope
- Limitations
- Architecture
- Implementation
- Future work

All documentation follows APA 7th-edition guidelines.

---

> For more details, refer to the full project documentation and source code.