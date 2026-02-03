# Validation Plan: AI Primary Care System

## 1. Testing Framework

We will employ a three-tiered testing approach to ensure safety, efficacy, and clinical relevance.

### Tier 1: Unit & Linguistic Compliance Tests
*   **Objective**: Verify system adherence to strict formatting constraints.
*   **Method**: Automated scripts running 100+ generic inputs.
*   **Checks**:
    *   Does the phrase "I understand" appear in acknowledgments?
    *   Are forbidden terms (e.g., "Hypertension") completely absent?
    *   Does "What concerns you most about this?" trigger before any recommendation?
    *   Does the triage disclaimer appear on every emergency workflow?

### Tier 2: Clinical Vignette Simulation (The "Gold Standard")
*   **Objective**: Measure diagnostic safety and triage accuracy.
*   **Method**: Run 50 standardized patient vignettes (25 Emergency, 25 Mild) derived from medical licensing exams (USMLE Step 2 CS).
*   **Evaluation**: Blinded review by board-certified physicians.
*   **Passing Criteria**:
    *   Sensitivity for Emergencies: **100%** (Zero missed emergencies).
    *   Specificity for Mild Cases: >80% (Appropriate self-care without over-escalation).

### Tier 3: User Experience (UX) Beta
*   **Objective**: Validate the "human" element—empathy and flow.
*   **Method**: Closed beta with 20 non-medical users acting as patients.
*   **Metrics**:
    *   Perceived Empathy Score (Likert 1-5).
    *   Clarity of Instructions (Likert 1-5).
    *   Average Consultation Time.

## 2. Measuring Safety & Effectiveness

### Safety Metrics
*   **Missed Escalation Rate**: Must be 0%. Any emergency symptom classified as "mild" is a critical failure.
*   **Hallucination Rate**: Frequency of the AI inventing medical facts or protocols.
*   **Scope Creep**: Instances where the AI attempts to diagnose complex conditions or prescribe medication (Must be 0%).

### Effectiveness Metrics
*   **Symptom Resolution Potential**: Logic check—are the 3 self-care steps actually evidence-based for the stated symptom?
*   **Teach-back Success**: Do users understand the "When to call a doctor" instruction?

## 3. Hospital Administrator Pitch

To convince stakeholders this is ready for deployment, we present:
1.  **The "Safety Net" Report**: Demonstration of the 100% sensitivity to Red Flag symptoms in our vignette testing.
2.  **Liability Shield**: The exact transcripts showing the AI never "diagnoses" but always "assesses and guides," combined with the robust disclaimer logs.
3.  **Efficiency Data**: Estimated reduction in unnecessary ER visits for mild cases (based on our specificity data), projecting specific cost savings per patient.
