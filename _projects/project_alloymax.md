---
title: AlloyMax - Bringing Maximum Satisfaction to Relational Specifications
subtitle: 
description: 
layout: product
image: ../assets/img/alloymax_project.png
features:
    - label: Alloy
    - label: First-Order Relational Logic
    - label: MaxSAT Solving
    - label: Formal Verification
---

Alloy is a declarative modeling language based on a first-order relational logic. Its constraint-based analysis has enabled a wide range of applications in software engineering, including configuration synthesis, bug finding, test-case generation, and security analysis. Certain types of analysis tasks in these domains involve finding an *optimal* solution. For example, in a network configuration problem, instead of finding any valid configuration, it may be desirable to find one that is most *permissive* (i.e., it permits a maximum number of packets). Due to its dependence on SAT, however, Alloy cannot be used to specify and analyze these types of problems.

This work proposes AlloyMax, an extension of Alloy with a capability to express and analyze problems with optimal solutions. AlloyMax introduces (1) a small addition of  language constructs that can be used to specify a wide range of problems that involve optimality and (2) a new analysis engine that leverages a *Maximum Satisfiability* (*MaxSAT*) solver to generate optimal solutions. To enable this new type of analysis, we show how a specification in a first-order relational logic can be translated into an input format of MaxSAT solvers---namely, a Boolean formula in *weighted conjunctive normal form* (*WCNF*). AlloyMax is the first approach to enable analysis with optimality in a relational modeling language, and we believe that AlloyMax has the potential to bring a wide range of new applications to Alloy.

*Publications:*
- [AlloyMax: bringing maximum satisfaction to relational specifications](https://dl.acm.org/doi/abs/10.1145/3468264.3468587)