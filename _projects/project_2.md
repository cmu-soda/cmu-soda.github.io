---
title: Verification of Secure Multiparty Computation Deployments with Domain Context
subtitle: 
description: 
category: past
layout: product
image: ../assets/img/andy_project_2.jpg
features:
    - label: Secure Multiparty Computation
      icon: fa-users
    - label: Formal Verification
      icon: fa-check
---

Secure multiparty computation (MPC) is a cryptographic process that allows for mathematical computation over masked and unknown inputs.
MPC deployments are used in a variety of areas, including medical and economic research, as well as cryptocurrencies and digital key wallets.
However, many MPC implementation (including those implemented by MPC cryptographers) have security gaps and bugs.
Even when implementations are theoretically secure, they can still be crippled by the domain they are deployed in - the context of the deployment as well the hardware infrastructure the computation runs on.
While there has been much work in proving theoretical MPC protocols, as well as formal models for MPC compillers, there is little work in formally verifying MPC.
In this work, we create formal models of different MPC protocols, and include the hardware infrastructure context within the model to identify security vulnerabilities.
This allows for identification of security vulnerabilities that exist due to hardware configurations that cannot be reasoned about during cryptographic proofs.
