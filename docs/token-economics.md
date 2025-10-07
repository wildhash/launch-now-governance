# ⚙️ Token Economics

## Overview
The Launch Now Governance Token (LN-GOV) is designed to reward participation, inclusion, and the integration of diverse needs within the governance process. It operates on a proof-of-participation model that incentivizes convergent facilitation rather than simple voting.

## Token Components

| Component          | Function                               | Mechanism                                |
| :----------------- | :------------------------------------- | :--------------------------------------- |
| **Token (LN-GOV)** | Proof of participation & inclusion     | ERC-20 + EAS attestations                |
| **Minting**        | Reward criteria creation, facilitation | Auto-mint to wallets after each phase    |
| **Staking**        | Integrity commitment                   | Facilitators stake; slashed for coercion |
| **Rewards**        | Incentivize integration                | "Others' needs integrated" metric        |
| **Treasury**       | Fund aligned proposals                 | Allocated via CF proposal process only   |

## Token Distribution Model

### Minting Schedule
Tokens are minted dynamically based on participation and contribution to the convergence process:

- **Criteria Submission**: Participants earn tokens for submitting criteria that represent genuine needs
- **Proposal Creation**: Additional rewards for proposals that integrate multiple criteria
- **Facilitation**: Facilitators earn tokens for successfully guiding the convergence process
- **Willingness Voting**: Participants earn tokens for providing detailed rationale with votes

### Staking Mechanism
Facilitators must stake LN-GOV tokens as a commitment to integrity:
- **Stake Amount**: Proportional to the size and complexity of the proposal
- **Slashing Conditions**: 
  - Coercive behavior detected by Guardian Agent
  - Failure to integrate dissenting voices
  - Manipulation of the convergence process
- **Rewards**: Successful facilitation returns stake with bonus rewards

### Reward Calculations

#### Integration Score
Measures how well a proposal integrates diverse needs:
```
Integration Score = (Criteria Met / Total Criteria) × (Unique Contributors / Total Participants)
```

#### Facilitation Bonus
Rewards facilitators based on complexity and success:
```
Facilitation Bonus = Base Reward × Integration Score × (1 + Dissent Resolved / Total Dissent)
```

## Treasury Management

### Allocation Process
All treasury allocations must go through the full Convergent Facilitation process:
1. Funding criteria phase (what needs should the allocation address?)
2. Proposal phase (how should funds be allocated?)
3. Decision phase (willingness votes from all stakeholders)

### Treasury Funding Sources
- Initial token sale (if applicable)
- Transaction fees from governance actions
- External grants and partnerships aligned with mission
- Donations from aligned organizations

## Token Utility

### Governance Rights
- Submit criteria and proposals
- Vote on decisions (willingness-based, not weighted by tokens)
- Participate in facilitation roles (requires staking)

### Economic Rights
- Share of treasury rewards for successful proposals
- Facilitation bonuses
- Staking rewards for maintaining integrity

### Reputation Linkage
LN-GOV tokens are linked to on-chain reputation via EAS (Ethereum Attestation Service):
- Attestations record participation history
- Integration scores become permanent reputation markers
- Facilitator track records visible to all participants

## Economic Incentives Alignment

### Pro-Social Behaviors Rewarded
- **Including dissent**: Extra rewards for integrating minority voices
- **Criteria quality**: Rewards scale with how many proposals address your criteria
- **Facilitation excellence**: Bonuses for achieving convergence without coercion
- **Transparency**: Rewards for detailed rationale and open communication

### Anti-Social Behaviors Penalized
- **Coercion**: Stake slashing and reputation damage
- **Bad faith proposals**: No rewards for proposals that don't address criteria
- **Silence dissent**: Penalties for facilitators who ignore outliers
- **Gaming the system**: Guardian Agent detection leads to stake loss

## Long-Term Sustainability

### Deflationary Mechanisms
- Token burns on slashing events
- Treasury efficiency dividends (return unused funds)

### Inflationary Mechanisms
- Participation rewards
- Facilitation bonuses
- Integration incentives

### Balance Target
The protocol aims for a balance where participation rewards match the natural rate of DAO growth, preventing both excessive inflation and deflationary hoarding.

## Token Launch Strategy

### Phase 1: Genesis (Months 1-3)
- Initial distribution to founding stewards
- Small-scale governance experiments
- Calibrate reward parameters

### Phase 2: Growth (Months 4-12)
- Public token availability
- Onboard facilitators and participants
- Scale governance capacity

### Phase 3: Maturity (Year 2+)
- Full decentralization
- Community-managed parameters
- Cross-DAO convergence experiments
