---
layout: "post"
title: "Sharp Mechanism Bounds, Average Effects, and Inference"
date: "2024-07-18"
tags: ["econometrics", "causal inference"]
excerpt: "A necessary inequality becomes a sharp testable restriction only after showing that every data distribution satisfying it can arise under the null."
note_series: "Testing mechanisms"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Testing Mechanisms/stats.tex"
redirect_from: ["/2025/10/28/sharp-mechanism-bounds-average-effects-and-inference/", "/2025/10/28/sharpness-of-principal-stratum-bounds/", "/2025/11/26/bounds-on-average-effects-within-principal-strata/", "/2025/12/25/inference-for-mechanism-bounds/"]
---

<div class="note-content" markdown="0">

<p>The preceding inequality gives a lower bound on the mass of stayers whose outcomes change. To show that the bound is sharp, we must construct a model attaining it while reproducing every observed distribution. <span class="citation" data-cites="kwon_testing_2024">(<a href="#ref-kwon_testing_2024" role="doc-biblioref">Kwon and Roth 2024</a>)</span> does this by assigning equal outcomes to as many stayers as the overlap between the observed distributions permits.</p>

<h3 data-note-section="1" id="23-59-the-sharpness-result">1. The sharpness result</h3>
<p>Use principal-stratum shares {% raw %}<span class="math inline">\(\theta_{lk}\)</span>{% endraw %} and observable differences {% raw %}<span class="math inline">\(\Delta_k(A)\)</span>{% endraw %} from the <a href="{% post_url 2024-07-13-testing-mediation-principal-strata-and-observable-bounds %}">mediation setup</a>.</p>

<div id="mechanism-sharpness" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. For each feasible {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, the paper constructs potential outcomes and mediators matching the observed data and attaining</p>

{% raw %}<div class="math display">\[
\theta_{kk}\nu_k=
\left[\sup_A\Delta_k(A)-\sum_{l\ne k}\theta_{lk}\right]_+
\]</div>{% endraw %}
<p>simultaneously across mediator states. Consequently, if one feasible {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} satisfies all the null inequalities, there is a compatible potential-outcome model satisfying the sharp null of full mediation.</p>

</div>
<h3 data-note-section="2" id="23-59-couple-the-common-part-first">2. Couple the common part first</h3>
<p>Choose a common dominating measure for the finitely many outcome subdistributions. For two probability densities {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g\)</span>{% endraw %}, their overlapping mass is</p>

{% raw %}<div class="math display">\[
\int\min(f,g)=1-\frac12\int|f-g|.
\]</div>{% endraw %}
<p>A maximal coupling places equal outcomes on the common mass. Only the residual mass needs unequal outcomes. In the mediation construction, entrants and leavers can explain part of the discrepancy between observed cells; whatever remains must belong to stayers whose outcomes change.</p>

<p>This allocation must also preserve every mediator margin. Once those constraints are satisfied, the coupling attains the lower bound on the affected fraction. A comparison of conditional means would lose the distributional information needed for this construction.</p>

<h3 data-note-section="3" id="23-59-average-direct-effects-use-trimming">3. Average direct effects use trimming</h3>
<p>Suppose a fraction {% raw %}<span class="math inline">\(a_d=\theta_{kk}/\Pr(M=m_k\mid D=d)&gt;0\)</span>{% endraw %} of an observed cell consists of stayers. With conditional outcome quantile function {% raw %}<span class="math inline">\(Q_{dk}\)</span>{% endraw %}, their mean under treatment state {% raw %}<span class="math inline">\(d\)</span>{% endraw %} lies between</p>

{% raw %}<div class="math display">\[
\frac1{a_d}\int_0^{a_d}Q_{dk}(u)\,du
\quad\text{and}\quad
\frac1{a_d}\int_{1-a_d}^1Q_{dk}(u)\,du.
\]</div>{% endraw %}
<p>The lowest mean assigns stayers to the bottom {% raw %}<span class="math inline">\(a_d\)</span>{% endraw %} fraction; the highest assigns them to the top. Quantile integrals handle atoms by allocating the appropriate fraction of a tied mass. Subtracting the opposing endpoints bounds the mean direct effect among stayers, assuming finite means.</p>

<p>When the stayer shares are unknown, optimize over their joint feasible set. The affected fraction and the average effect require separate objectives: a large number of small effects can give a large fraction with a small average.</p>

<h3 data-note-section="4" id="23-59-implementing-the-test">4. Implementing the test</h3>
<p>For discrete outcomes, the supremum over sets is the sum of positive cell-probability differences. The feasibility restrictions become a linear program when restrictions on {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} are linear. Sampling uncertainty then requires an appropriate moment-inequality or constrained-inference procedure; simply checking whether estimated inequalities hold ignores noise.</p>

<p>Merging outcome cells reduces the collection of sets available for detecting a discrepancy and hence weakens the restriction. Merging mediator states changes the definition of a stayer itself. It requires a separate justification.</p>

<h3 data-note-section="5" id="23-59-unequal-cell-masses-and-the-overlap-formula">5. Unequal cell masses and the overlap formula</h3>
<p>The observed outcome distributions within a mediator state are subprobability measures, because their masses equal the mediator cell probabilities. Let their densities with respect to a common dominating measure be {% raw %}<span class="math inline">\(f_{0k},f_{1k}\)</span>{% endraw %}, with masses {% raw %}<span class="math inline">\(p_{0k},p_{1k}\)</span>{% endraw %}. Their common mass is</p>

{% raw %}<div class="math display">\[
O_k\triangleq\int\min(f_{0k},f_{1k}).
\]</div>{% endraw %}
<p>To maximize a signed integral over sets, include the points where the density is positive and exclude those where it is negative. Applying this observation gives</p>

{% raw %}<div class="math display">\[
\sup_A\Delta_k(A)
=\int(f_{1k}-f_{0k})_+
=p_{1k}-O_k.
\]</div>{% endraw %}
<p>The entrant mass is {% raw %}<span class="math inline">\(\sum_{l\ne k}\theta_{lk}=p_{1k}-\theta_{kk}\)</span>{% endraw %}. Subtracting it gives the especially simple form</p>

{% raw %}<div class="math display">\[
\left[\sup_A\Delta_k(A)-\sum_{l\ne k}\theta_{lk}\right]_+
=(\theta_{kk}-O_k)_+.
\]</div>{% endraw %}
<p>Thus the question is whether the observed common outcome mass can accommodate all stayers. If {% raw %}<span class="math inline">\(O_k\geq\theta_{kk}\)</span>{% endraw %}, every stayer can keep the same outcome. If {% raw %}<span class="math inline">\(O_k&lt;\theta_{kk}\)</span>{% endraw %}, the remaining stayer mass must change outcome. Comparing normalized conditional densities alone would miss the different mediator cell masses in this calculation.</p>

<h3 data-note-section="6" id="23-59-constructing-the-coupling">6. Constructing the coupling</h3>
<p>Allocate {% raw %}<span class="math inline">\(\min(\theta_{kk},O_k)\)</span>{% endraw %} of the common submeasure to stayers with equal outcomes. If this fills the stayer mass, distribute the remaining observed cell masses among entrants and leavers according to their feasible stratum shares.</p>

<p>If {% raw %}<span class="math inline">\(O_k&lt;\theta_{kk}\)</span>{% endraw %}, first exhaust the common part. The two residual outcome submeasures then live on disjoint density regions up to null sets: at each point at least one residual density is zero. Choose {% raw %}<span class="math inline">\(\theta_{kk}-O_k\)</span>{% endraw %} mass from each residual side for the remaining stayers and couple those outcomes. Their outcomes necessarily differ. There is enough mass on each side because {% raw %}<span class="math inline">\(\theta_{kk}\leq\min(p_{0k},p_{1k})\)</span>{% endraw %}.</p>

<p>The remaining control mass equals {% raw %}<span class="math inline">\(p_{0k}-\theta_{kk}\)</span>{% endraw %} and the remaining treated mass equals {% raw %}<span class="math inline">\(p_{1k}-\theta_{kk}\)</span>{% endraw %}, exactly the leaver and entrant masses. They can be split among the appropriate off-diagonal strata. For a mover, the two observed outcomes concern different mediator values, so equality of treatment-state outcomes at a fixed mediator value can be completed using the unobserved potential outcomes. Stayers are the strata that reveal both treatment states at the same mediator value.</p>

<p>Using a single feasible matrix makes these allocations consistent across mediator states. If every {% raw %}<span class="math inline">\(\theta_{kk}\leq O_k\)</span>{% endraw %}, each stayer can keep the same outcome and the unobserved potential outcomes can be completed to satisfy full mediation. Thus the observed inequalities are sufficient as well as necessary.</p>

<p>For a numerical construction, use the three outcome values {% raw %}<span class="math inline">\(0,1,2\)</span>{% endraw %} and the subdistributions {% raw %}<span class="math inline">\((0.18,0.04,0.18)\)</span>{% endraw %} under treatment and {% raw %}<span class="math inline">\((0.10,0.20,0.10)\)</span>{% endraw %} under control. Their common part is {% raw %}<span class="math inline">\((0.10,0.04,0.10)\)</span>{% endraw %}, of mass {% raw %}<span class="math inline">\(0.24\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\theta_{kk}=0.30\)</span>{% endraw %}, allocate this entire common part to unchanged stayers.</p>

<p>The residual treated masses are {% raw %}<span class="math inline">\((0.08,0,0.08)\)</span>{% endraw %} and the residual control masses are {% raw %}<span class="math inline">\((0,0.16,0)\)</span>{% endraw %}. Allocate {% raw %}<span class="math inline">\(0.06\)</span>{% endraw %} from treated outcome zero and control outcome one to changed stayers. This produces exactly {% raw %}<span class="math inline">\(0.30\)</span>{% endraw %} stayer mass, of which {% raw %}<span class="math inline">\(0.06\)</span>{% endraw %} changes outcome. The remaining treated mass is {% raw %}<span class="math inline">\((0.02,0,0.08)\)</span>{% endraw %} and the remaining control mass is {% raw %}<span class="math inline">\((0,0.10,0)\)</span>{% endraw %}, each totaling the required {% raw %}<span class="math inline">\(0.10\)</span>{% endraw %} entrant or leaver mass.</p>

<p>The lower bound is attained: no arrangement can match more than the common mass {% raw %}<span class="math inline">\(0.24\)</span>{% endraw %}, and this one matches all of it. Assigning the changed treated mass to outcome two instead would attain the same affected fraction with a positive rather than negative direct effect. The data can therefore force some individuals to be affected without identifying the direction of their average effect.</p>

<p>For this same example, stayers occupy three quarters of each observed cell. The smallest feasible treated stayer total is {% raw %}<span class="math inline">\(0.18\cdot0+0.04\cdot1+0.08\cdot2=0.20\)</span>{% endraw %}; the largest is {% raw %}<span class="math inline">\(0.08\cdot0+0.04\cdot1+0.18\cdot2=0.40\)</span>{% endraw %}. Dividing by {% raw %}<span class="math inline">\(0.30\)</span>{% endraw %} gives means between {% raw %}<span class="math inline">\(2/3\)</span>{% endraw %} and {% raw %}<span class="math inline">\(4/3\)</span>{% endraw %}. The control stayer mean has the same endpoints, obtained by trimming its bottom or top {% raw %}<span class="math inline">\(0.30\)</span>{% endraw %} mass. Thus the separate sharp mean-effect bounds are {% raw %}<span class="math inline">\([-2/3,2/3]\)</span>{% endraw %}, while the affected-fraction lower bound is {% raw %}<span class="math inline">\(0.20\)</span>{% endraw %}.</p>

<p>The two calculations answer different questions about the same data. Overlap determines how many stayers must change outcome; trimming determines the smallest and largest means that the stayer group can have.</p>

<h3 data-note-section="7" id="23-59-deriving-trimmed-means-by-an-exchange-argument">7. Deriving trimmed means by an exchange argument</h3>
<p>Consider one observed cell with distribution {% raw %}<span class="math inline">\(F\)</span>{% endraw %} and a stayer fraction {% raw %}<span class="math inline">\(a\in(0,1]\)</span>{% endraw %}. Any admissible allocation of stayers can be represented by a selection probability {% raw %}<span class="math inline">\(s(y)\in[0,1]\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(\int s\,dF=a\)</span>{% endraw %}. Their mean is</p>

{% raw %}<div class="math display">\[
\mu_S=\frac1a\int y s(y)\,dF(y).
\]</div>{% endraw %}
<p>To minimize it, suppose some higher outcome {% raw %}<span class="math inline">\(y_2\)</span>{% endraw %} receives positive selection mass while a lower outcome {% raw %}<span class="math inline">\(y_1\)</span>{% endraw %} is not fully selected. Moving a small equal amount of selection probability from {% raw %}<span class="math inline">\(y_2\)</span>{% endraw %} to {% raw %}<span class="math inline">\(y_1\)</span>{% endraw %} preserves the mass constraint and lowers the numerator by that mass times {% raw %}<span class="math inline">\(y_2-y_1\)</span>{% endraw %}. Iterating this exchange fills the bottom {% raw %}<span class="math inline">\(a\)</span>{% endraw %} fraction first. This yields {% raw %}<span class="math inline">\(a^{-1}\int_0^aQ(u)\,du\)</span>{% endraw %}; the upper bound fills the top fraction.</p>

<p>If {% raw %}<span class="math inline">\(F\)</span>{% endraw %} puts probability {% raw %}<span class="math inline">\(0.7\)</span>{% endraw %} at zero and {% raw %}<span class="math inline">\(0.3\)</span>{% endraw %} at ten, and {% raw %}<span class="math inline">\(a=0.5\)</span>{% endraw %}, the minimum stayer mean is zero. The maximum selects all {% raw %}<span class="math inline">\(0.3\)</span>{% endraw %} mass at ten and {% raw %}<span class="math inline">\(0.2\)</span>{% endraw %} at zero, giving</p>

{% raw %}<div class="math display">\[
\mu_S^{\max}=\frac{0.3\cdot10+0.2\cdot0}{0.5}=6.
\]</div>{% endraw %}
<p>The maximizing allocation uses only part of the atom at zero. An all-or-nothing rule for atoms would miss the required stayer mass; the quantile integral allows the needed fraction.</p>

<h3 data-note-section="8" id="23-59-fractions-affected-and-average-effects-answer-different-questions">8. Fractions affected and average effects answer different questions</h3>
<p>Apply the trimming bounds separately to the two observed mediator cells, using {% raw %}<span class="math inline">\(a_d=\theta_{kk}/p_{dk}\)</span>{% endraw %}. The lowest mean direct effect among stayers uses the treated lower mean minus the control upper mean; the highest uses the opposite endpoints. These bounds concern a specified feasible stayer share, and unknown shares must be optimized over their joint feasible set.</p>

<p>Overlap bounds the minimum mass of stayers whose outcomes change, without measuring the size or sign of those changes. The mean effect also depends on outcome magnitudes, and positive and negative effects may cancel. Separate sharp bounds for these objectives need not be jointly attainable under one construction.</p>

<p>In a sample, the cell probabilities are estimated. For discrete outcomes, retaining the inequalities for individual outcome subsets and the stratum constraints gives linear population restrictions. A moment-inequality procedure must account for error in their estimated coefficients. Exact feasibility of empirical proportions alone does not provide a test with controlled rejection probability.</p>

<h3 id="23-59-making-the-trimming-argument-valid-for-continuous-distributions">Making the trimming argument valid for continuous distributions</h3>
<p>The exchange argument can be expressed as one integral inequality. For {% raw %}<span class="math inline">\(0&lt;a&lt;1\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(q=Q_F(a)\)</span>{% endraw %} and select all outcomes below {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, none above it, and the fraction of the atom at {% raw %}<span class="math inline">\(q\)</span>{% endraw %} needed to obtain total mass {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. Call this rule {% raw %}<span class="math inline">\(s_*\)</span>{% endraw %}; the quantile inequalities {% raw %}<span class="math inline">\(F(q-)\leq a\leq F(q)\)</span>{% endraw %} ensure that the fractional selection is feasible. For every other admissible {% raw %}<span class="math inline">\(s\)</span>{% endraw %},</p>
<p>{% raw %}<div class="math display">\[
(y-q)(s(y)-s_*(y))\geq0.
\]</div>{% endraw %}</p>
<p>Below {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, both factors are nonpositive; above {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, both are nonnegative; at {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, their product is zero. Since {% raw %}<span class="math inline">\(\int(s-s_*)\,dF=0\)</span>{% endraw %}, integrability gives</p>
<p>{% raw %}<div class="math display">\[
\int y(s-s_*)\,dF
=\int(y-q)(s-s_*)\,dF\geq0.
\]</div>{% endraw %}</p>
<p>Thus the bottom-tail allocation minimizes the mean over every measurable selection rule, without assuming that an iterative exchange converges. Its numerator equals {% raw %}<span class="math inline">\(\int_0^aQ_F(u)\,du\)</span>{% endraw %} by the quantile representation. Reversing the cutoff rule gives the upper-tail maximum. When {% raw %}<span class="math inline">\(a=1\)</span>{% endraw %}, the only admissible selection is one almost surely and both bounds equal the observed mean. This also supplies the endpoint case where an unbounded distribution need not have a finite {% raw %}<span class="math inline">\(Q_F(1)\)</span>{% endraw %}.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-kwon_testing_2024" class="csl-entry" role="listitem">
Kwon, Soonwoo, and Jonathan Roth. 2024. <span>“Testing Mechanisms.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2404.11739">https://doi.org/10.48550/arXiv.2404.11739</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-07-13-testing-mediation-principal-strata-and-observable-bounds %}">Testing Mediation: Principal Strata and Observable Bounds</a></p></nav>

</div>
