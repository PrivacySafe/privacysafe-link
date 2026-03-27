# AI Contribution Policy
_Last Updated: March 27, 2026_

## 0. Scope and Terminology

In this policy, the terms "AI" and "artificial intelligence" are used to refer to generative AI or hybrid AI systems that incorporate machine learning (ML) and large language models (LLMs), and that produce primarily probabilistic outputs. This includes commonly used tools such as ChatGPT, GitHub Copilot, Claude, Gemini, and similar systems.

## 1. Purpose and Principles

PrivacySafe and 3NWeb are privacy-first, open standards-driven projects built on transparency, security, and user autonomy. Contributions must reflect these values:

- Human accountability over automation  
- Verifiable, auditable, and secure code  
- Respect for software freedom and licensing integrity  
- Alignment with 3NWeb architecture and PrivacySafe design principles  

We prioritize quality, maintainability, and trustworthiness over speed or volume of contributions.

## 2. Human Responsibility and Accountability

All contributions must be made by a human contributor who:

- Understands the code they are submitting and how it behaves  
- Can explain design decisions and implementation details  
- Takes responsibility for correctness, security, and compliance  

AI tools may assist, but they are not contributors.

Submissions where the contributor cannot reasonably explain the code may be rejected. This reflects the expectation that contributors stand behind their work and do not defer to tools for justification.

## 3. AI-Assisted Contributions

### 3.1 General Position

AI-assisted tools are increasingly common in development workflows. Some uses, such as code completion, can be helpful. Other uses can introduce risks related to legal uncertainty, code provenance, and maintainability.

These risks include:

- Potential inclusion of third-party or incompatible licensed code  
- Lack of clear provenance or attribution  
- Increased likelihood of subtle errors or insecure patterns  
- Additional review and maintenance overhead  

Contributors should use care and judgment when incorporating AI-assisted output into submissions.

### 3.2 Mandatory Disclosure

If AI tools were used to generate a significant portion of a contribution, contributors must disclose:

- The AI system used  
- The scope of AI-generated content  
- A description of how the output was reviewed or modified  

Include in the commit message:

```text
Assisted-by: <Tool Name and Version>
````

Example:

```text
Assisted-by: ChatGPT 5.2
Assisted-by: Claude Opus 4.5
Assisted-by: Google Gemini
Assisted-by: Github Copilot
```

Transparency helps maintainers focus review appropriately and assess risk.

### 3.3 Acceptability Criteria

AI-assisted contributions may be accepted when:

* The contributor can explain the code and its behavior
* The contribution is appropriately scoped and relevant
* The code aligns with project architecture and design goals
* There is no indication of copied or regurgitated third-party code
* Licensing compatibility can be reasonably confirmed

If there is uncertainty around safety, provenance, or intent, maintainers may decline the contribution.

### 3.4 Prohibited Uses

The following are not allowed:

* Fully AI-generated pull requests without meaningful human involvement
* Large blocks of unreviewed or unexplained generated code
* AI-generated issue reports or discussions
* Automated refactoring or sweeping changes without prior alignment
* Submissions based on "hallucinated" features or incorrect assumptions

These patterns are known to create significant maintenance overhead and reduce project quality.

## 4. Legal and Licensing Requirements

By submitting a contribution, you confirm:

* You have the legal right to contribute the code
* The contribution is compatible with the repository license
* The code does not infringe on third-party intellectual property
* Any AI-assisted content complies with the terms of the AI tool used

AI-generated code requires additional care due to:

* Possible inclusion of copyrighted material
* Lack of traceable origin
* Potential restrictions imposed by tool providers

Contributions that cannot be reasonably verified as legally safe will not be accepted.

## 5. Design and Contribution Workflow

### 5.1 Design First

For non-trivial changes:

* Open an issue or discussion before submitting a pull request
* Align with maintainers on intent and architecture
* Ensure compatibility with 3NWeb protocols and PrivacySafe design

Unsolicited large changes may be declined.

### 5.2 Focused Contributions

* Keep pull requests small, targeted, and testable
* Avoid bulk or speculative changes
* Prioritize meaningful and clearly justified improvements

We value thoughtful contributions over volume.

## 6. Security and Privacy Requirements

Given the mission of PrivacySafe:

* All contributions must be security-conscious
* Code must not introduce tracking, telemetry, or hidden data flows
* Dependencies must be transparent and auditable
* Privacy-by-design principles must be preserved

Any ambiguity in data handling or security posture may result in rejection.

## 7. Documentation and Transparency

Contributors must:

* Provide clear and accurate documentation
* Explain relevant security and privacy implications
* Write pull request descriptions that reflect human understanding

Autogenerated or vague descriptions may be rejected.

## 8. Enforcement

Maintainers may:

* Reject or close contributions that do not meet these standards
* Request clarification or revisions
* Limit or block contributions in cases of repeated violations

Decisions prioritize project safety, legal integrity, and maintainability.

## 9. Acknowledgement

This policy draws on the  [Mastodon AI Contibution Policy](https://github.com/mastodon/.github/blob/main/AI_POLICY.md) and related work from CloudNativePG, Ghostty, and the Linux Foundation’s Generative AI policy.

## 10. License

This document is released under the [CC0 1.0 Universal Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/). You are free to copy, modify, distribute, and use it for any purpose without restriction.
