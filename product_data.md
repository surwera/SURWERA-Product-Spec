# SURWERA PRODUCT SPECIFICATION DOCUMENT
**Version:** Enterprise v6.0 (STS-02 Compliant)
**Date:** December 2025
**Provider:** Surwera AB

---

## 1. PRODUCT IDENTITY & ARCHITECTURE
* **System Name:** SURWERA System
* **Core Architecture:** Dual-Node Autonomous "Drone-in-a-Box" (Hot-Swap Capable)
* **Operational Logic:** **Continuous Aerial Presence.** The system utilizes a relay logic where one drone is always airborne analyzing the sector. As the active unit depletes its battery, the secondary unit launches to replace it instantly (Hot-Swap), ensuring 100% temporal coverage (0% downtime).
* **Deployment Model:** Cloud-Native (AWS Kubernetes) with full code sovereignty.

## 2. OPERATIONAL PHASING & REGULATORY ENVELOPE
*The Surwera system is designed to scale from standard specific scenarios to full self-authorized autonomous operations.*

### Phase 1: Initial Deployment (STS-02)
* **Regulatory Standard:** EASA STS-02 (Operations Beyond Visual Line of Sight over a controlled ground area in a sparsely populated environment).
* **Operational Area:**
    * **Max Range:** Up to **1 km** radius.
    * **Max Height:** 120 meters (400 ft) AGL.
    * **Ground Risk:** Operations strictly conducted over a **Controlled Ground Area** (fenced or secured industrial perimeter) where unauthorized persons are excluded.
    * **Air Risk:** No Airspace Observer required (1km limitation).
* **Drone Classification:** C6 Class Compliant.

### Phase 2: Operations Center (LUC)
* **Regulatory Goal:** Light UAS Operator Certificate (LUC).
* **Operational Upgrade:** Full self-authorization for complex BVLOS without Airspace Observers.
* **Extended Range:** Expands coverage to **10 km+** radius and interconnected multi-site mesh networks.

## 3. EXECUTIVE SUMMARY
The Surwera System provides true, uninterrupted 24/7 aerial presence. Unlike legacy systems that react to ground sensors, Surwera maintains a constant "Eye in the Sky." Upon detection, onboard **AI Agents** autonomously execute an interception flight path, actively approaching the intruder to initiate vocal confrontation. The system bridges the gap between passive observation and active security, offering <1 minute response times.

## 4. HARDWARE SPECIFICATIONS: AIR SEGMENT
**Airframe:** Surwera Air (DJI Matrice 4TD Custom Config)

### 4.1 Flight Performance
* **Max Flight Time:** 50 Minutes (Standard)
* **Max Speed:** 21 m/s (approx. 75 km/h) for rapid interception
* **Wind Resistance:** 12 m/s (Operational)
* **Ingress Protection:** IP55 (Certified for Rain, Dust, Snow)
* **Transmission:** O4 Enterprise (Triple-channel 2.4/5.2/5.8 GHz) with AES-256 Encryption
* **Dimensions:**
    * *Unfolded:* ~570×583×465 mm (Excluding propellers)
    * *Folded:* Compact transport mode for standard service vehicles.

### 4.2 Optical Payload (Triple-Sensor Array)
*The M4TD integrates three distinct sensors for comprehensive situational awareness.*

| Sensor | Specification | Function |
| :--- | :--- | :--- |
| **Wide Camera** | **48 MP**, 1/1.32-inch CMOS<br>Lens: 24mm eq., f/1.7 | **Situational Awareness.** Superior low-light performance for night operations. |
| **Tele Camera** | **48 MP**, 1/1.32-inch CMOS<br>Zoom: **56x Hybrid Zoom** | **Identification.** Reads license plates or faces from safe standoff distances (100m+). |
| **Thermal Camera** | **Res:** 640×512 @ 30Hz<br>**Display:** Upscaled 1280×1024 | **Detection.** High-sensitivity infrared detects body heat instantly in total darkness/smoke. |

### 4.3 Active Deterrence Payload
* **Loudspeaker:** 114 dB @ 1 meter (Speech intelligibility up to 300m).
* **Lighting:** High-Intensity LED Spotlight + Strobe Beacon.

## 5. HARDWARE SPECIFICATIONS: GROUND SEGMENT
**Base Station:** Surwera Base (DJI Dock 3)

* **Dimensions:** 570mm (L) × 583mm (W) × 465mm (H)
* **Weight:** 34 kg
* **Environmental:** Integrated TEC Air Conditioning & Defrosting (-25°C to +50°C).
* **Backup Power:** Integrated Battery (>5 Hours runtime during grid outage).
* **Edge Computing:** Local RTK processing and landing logic.

## 6. PLATFORM SPECIFICATIONS (SURWERA CORE)
*The Surwera Core is a cloud-native Command & Control (C2) platform hosted on AWS Kubernetes.*

### 6.1 Autonomous AI Agents
* **Behavioral Logic:** The system uses "AI Agents" rather than simple scripts. When an intruder is detected, the Agent autonomously decides:
    * **Approach Vector:** Calculates the safest and most visible angle.
    * **Confrontation Distance:** Maintains safe standoff while ensuring audio audibility.
    * **Escalation:** Cycles warning levels ("Observation" -> "Verbal Warning" -> "Strobe & Siren").

### 6.2 Flight Control Modes
* **Always-On Patrol (Auto):** 24/7 autonomous scheduling with auto-hot-swap logic.
* **Manual Override (Telepresence):** Authorized operators can seize control instantly (latency <200ms) via 4G/5G/Starlink.

### 6.3 SOC Integration & Reporting
* **API Bridge:** Direct digital integration into VMS and Alarm Central dashboards.
* **Alert Logic:** Pushes "Verified Alarms" (Video + Location) to the SOC.
* **Evidence Locker:** AES-256 Encrypted, tamper-proof cloud storage.
* **Auto-Reporting:** Automated PDF generation (Timeline, Map, Snapshots).

## 7. CONNECTIVITY & INSTALLATION
* **Backhaul:** Starlink / Fiber / 4G / 5G Bonding.
* **Power Requirements:** 100-240V AC (Max 1000W).
* **Site Requirements:** 1m x 1m flat surface, clear sky view.
* **Data Consumption:** Approx. 5-8 GB/month per unit (Standard) or 5 Mbps uplink for live streaming.

## 8. COMPLIANCE & MAINTENANCE
### 8.1 Regulatory Compliance
* **EASA Classification:** C6 Class Certified (Optimized for STS-02).
* **GDPR:** AI-driven privacy masking for faces/license plates (configurable).
* **Data Residency:** EU Sovereign Cloud (AWS Frankfurt/Stockholm).

### 8.2 Maintenance Cycle
* **Propellers:** Visual inspection every 100 flight hours; replacement every 300 hours.
* **Dock:** Air intake filter cleaning every 3-6 months.
* **MTBF:** >1000 Flight Hours.
* **Warranty:** Enterprise Shield Basic (1 Year) with 24h replacement turnaround.

## 9. CONTACT INFORMATION
* **Casper Augustsson:** 072 324 91 64 | casper@surwera.com
* **Koray Amico Kulbay:** 073 420 16 09 | koray@surwera.com