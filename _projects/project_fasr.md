---
title: Formalization and Automation of STPA with Robustness (FASR)
subtitle: 
description: 
layout: product
status: current
image: /assets/img/fasr_project.png
features:
    - label: System Safety Analysis
    - label: Formal Verification
---

The *Formalization and Automation of STPA with Robustness* (FASR) project uses [robustness](https://cmu-soda.github.io/projects/project_robustness.html) to partially automate the [*System Theoretic Process Analysis*](https://psas.scripts.mit.edu/home/wp-content/uploads/2020/07/JThomas-STPA-Introduction.pdf) (STPA).

Users model critical portions of their system in [SysML](https://en.wikipedia.org/wiki/Systems_modeling_language) with the [Cameo Enterprise Architect](https://www.3ds.com/products/catia/no-magic/cameo-enterprise-architecture) modeling environment. Then the FASR tool translates the models to [TLA+](https://lamport.azurewebsites.net/tla/tla.html), uses CMU SoDA's [Fortis](https://github.com/cmu-soda/fortis-core) to analyze their robustness, classifies the output, and reports back any Unsafe Control Actions to the user. This reporting takes place in Cameo EA, and uses the recent [RAAML](https://www.omg.org/spec/RAAML/) standardized hazard analysis format.

*Tools:*

* [Fortis](https://github.com/cmu-soda/fortis-core/tree/FASR) (be sure to use the FASR branch)
* [FASR](https://github.com/cmu-sei/fasr) 

*Document Marking:*

Copyright 2025 Carnegie Mellon University.

This material is based upon work funded and supported by the Department of Defense under Contract No. FA8702-15-D-0002 with Carnegie Mellon University for the operation of the Software Engineering Institute, a federally funded research and development center.  

The view, opinions, and/or findings contained in this material are those of the author(s) and should not be construed as an official Government position, policy, or decision, unless designated by other documentation.

NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.

[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.

This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.  Requests for permission for non-licensed uses should be directed to the Software Engineering Institute at permission@sei.cmu.edu.

DM25-1172
