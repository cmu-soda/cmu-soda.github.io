---
title: Improving Formal Methods Visualizations
description:
layout: product
image: ../assets/img/penlloy-thumbnail.png
features:
  - label: Formal specifications
    icon: fa-check
  - label: Visualizations
    icon: fa-image
---

Formal models (specifications) are powerful tools that provide assurance of system behavior, but whether or not the results are trustworthy hinges upon whether or not the stakeholders understand the behavior of the models and trust the correctness of the underlying specifications. Visualizations provide a way for these stakeholders to gain some insight into the model behavior, but exactly _how_ the visualizations are used is less clear.

We first conducted an interview study with expert users of formal modeling tools to understand how they use visualizations, how visualizations are helpful, and how they aren't [1]. This interview study concluded:
* Stakeholders use visualizations mostly to understand, diagnose, and present formal models; and
* Visualizations of formal modeling are sometimes not very helpful because of the **lack of domain specificity** and the **lack of visual consistency**.

To resolve the **lack of domain specificity**, we designed Penlloy [1], a domain-specific visualization framework for the Alloy specification language which uses Penrose [2] as its diagramming engine.

To resolve the **lack of visual consistency**, we formalized different notions of consistency into optimization problems that are solvable under the Penlloy framework [1]. 

References:
 - [1] [Improving Formal Methods Visualizations](https://kilthub.cmu.edu/articles/conference_contribution/Towards_Better_Formal_Methods_Visualizations/29086949)
 - [2] [Penrose: From Mathematical Notation to Beautiful Diagrams](https://penrose.cs.cmu.edu/siggraph20)