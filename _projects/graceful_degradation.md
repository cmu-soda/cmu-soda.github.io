---
title: Graceful Degradation of Architecture
subtitle: 
description: Studying how architectures can continue to deliver services even under attack.
layout: product
image: ../assets/img/graceful_deg.png
features:
    - label: Software Architecture
      icon: fa-home
    - label: Security of Systems
      icon: fa-bug
    - label: Resilience
      icon: fa-history
---

Software systems are composed of interacting processes and components that share data in order to provide services.
When processes deviate and can no longer transmit data, it is important for the system to continue providing safety-critical services.
An architecture that provide critical services while other, non-essential services become unavailable, the architecture is able to *gracefully degrade*.
Identifying the components of a system that are required for service delivery allow us to analyze the *resilience* of an architecture, and show that a system is more resilient to failure when there are more dataflow paths in an architecture.
Additionally, we can examine how architectures can automatically reconfigure to create new dataflow paths to maintain service delivery.
