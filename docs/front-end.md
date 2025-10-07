# Front-End Flow (Launch Now)

## 1) UX Journey
```mermaid
flowchart TD
  A[Visitor lands] --> B{Has ?r referral}
  B -- yes --> C[Store ref in localStorage]
  B -- no --> D[Continue]
  C --> D
  D --> E[Hero CTA: Launch Now]
  E --> F[Connect Wallet]
  E --> G[Email Capture]
  F --> H{Connected?}
  H -- yes --> I[Generate my referral link]
  H -- no --> G
  G --> J[POST /api/subscribe]
  I --> K[Success Panel + Share]
  J --> L[Increment Live Counter]
  L --> M[Leaderboard view]
  K --> M
  M --> N[Share link → new visits (?r)]
```

## 2) Component Map
```mermaid
graph LR
  App[app/page.tsx] --> Hero
  App --> SocialProof
  App --> HowItWorks
  App --> DemoBlock
  App --> Countdown
  App --> WalletConnect
  App --> EmailCapture
  App --> ReferralBar
  App --> LiveCounter
  App --> Leaderboard
  App --> Footer
```

## 3) Data & API Flow

```mermaid
sequenceDiagram
  participant U as User
  participant FE as Next.js Frontend
  participant API as /api routes
  participant KV as Upstash/Memory
  U->>FE: Click "Launch Now"
  FE->>FE: WalletConnect or EmailCapture
  FE->>API: POST /subscribe {email, ref}
  API->>KV: incr metrics:passes + zadd leaderboard(ref)
  KV-->>API: totals + scores
  API-->>FE: {ok, total}
  FE->>FE: Update LiveCounter + Success panel
  FE->>API: POST /referral {ownerId}
  API->>KV: set ref:<id> {ownerId}
  API-->>FE: {refId, link}
  FE->>U: Copy/Share referral link
```

## 4) CTA State Machine

```mermaid
stateDiagram-v2
  [*] --> Idle
  Idle --> Connecting : Click Connect
  Connecting --> Connected : Wallet OK
  Connecting --> Idle : Cancel/Fail
  Idle --> Submitting : Email Submit
  Submitting --> Success : 200 OK
  Submitting --> Idle : Error
  Connected --> Success : Referral Ready
  Success --> Idle : New session
```
