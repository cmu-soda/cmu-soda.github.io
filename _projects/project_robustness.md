---
title: Behavioral Robustness of Software System Designs
subtitle: 
description: 
category: past
layout: product
image: ../assets/img/robustness_project.png
features:
    - label: Software Robustness
    - label: Formal Verification
---

Software systems are designed and implemented with assumptions about the environment. However, once a system is deployed, the actual environment may *deviate* from its expected behavior, potentially leading to violations of desired properties. Ideally, a system should be *robust* to continue establishing its most critical requirements even in the presence of possible *deviations* in the environment. To enable systematic design of robust systems against environmental deviations, this work proposes a rigorous behavioral notion of robustness for software systems. Then, it presents a technique called \emph{behavioral robustification}, which involves two tactics to systematically and rigorously improve the robustness of a system design against potential deviations.

Specifically, the robustness of a system is defined as the largest set of deviating environmental behavior under which the system is capable of guaranteeing a desired property. Then, we present an approach to compute robustness based on this definition. On the other hand, the system is not robust against an environment when the environment exhibits deviations causing a violation of the desired property. The robustification method finds a re-design that is capable of satisfying the property under such a deviated environment. In particular, two tactics, namely *robustification-by-control* and *robustification-by-specification-weakening*, are introduced. The robustification-by-control tactic formulates the robustification problem as a *multi-objective optimization* problem with the goal of guaranteeing the desired property, while maximizing the amount of existing functionality and minimizing the cost of changes to the original design. Then, the specification-weakening tactic is used alongside the control tactic that allows weakening the property to generate more feasible re-designs, which retain more functionality or have a lower cost.

*Publications:*
- [A behavioral notion of robustness for software systems](https://dl.acm.org/doi/abs/10.1145/3368089.3409753)
- [Robustification of Behavioral Designs against Environmental Deviations](https://ieeexplore.ieee.org/abstract/document/10172695)
- [Fortis: A tool for analysis and repair of robust software systems](https://www.tuwien.at/academicpress/produkt/proceedings-of-the-23rd-conference-on-formal-methods-in-computer-aided-design-fmcad-2023-ebook/)
