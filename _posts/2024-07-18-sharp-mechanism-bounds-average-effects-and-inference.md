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

<p>The preceding inequality gives a lower bound on the mass of stayers whose outcomes change. To show that the bound is sharp, we must construct a model attaining it while reproducing every observed distribution. <span class="citation" data-cites="kwon_testing_2024"><a href="#ref-kwon_testing_2024" role="doc-biblioref">Kwon and Roth (2024)</a></span> do this by assigning equal outcomes to as many stayers as the overlap between the observed distributions permits.</p>

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
<p>Work first with a known finite outcome support {% raw %}<span class="math inline">\(\{y_1,\ldots,y_J\}\)</span>{% endraw %} and mediator support {% raw %}<span class="math inline">\(\{m_0,\ldots,m_{K-1}\}\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\((Y_i,M_i,D_i)\)</span>{% endraw %} are iid, treatment is assigned independently of all potential outcomes and mediators with {% raw %}<span class="math inline">\(P(D_i=1)=e\in(0,1)\)</span>{% endraw %}, and consistency gives {% raw %}<span class="math inline">\(M_i=M_i(D_i)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y_i=Y_i(D_i,M_i(D_i))\)</span>{% endraw %}. This is a superpopulation sampling model with independent assignment across individuals. Clustered observations require a different sampling argument.</p>
<p>Write {% raw %}<span class="math inline">\(n_d=\sum_i\mathbf1\{D_i=d\}\)</span>{% endraw %}. Conditional on the treatment labels, the {% raw %}<span class="math inline">\(n_d\)</span>{% endraw %} observations in arm {% raw %}<span class="math inline">\(d\)</span>{% endraw %} are iid draws from its outcome-mediator distribution. Define the observable probability vector {% raw %}<span class="math inline">\(q\in\mathbb R^{2KJ}\)</span>{% endraw %} by</p>
{% raw %}<div class="math display">\[
\begin{aligned}
q_{dkj}&amp;=P(Y=y_j,M=m_k\mid D=d),\\
p_{dk}&amp;=\sum_{j=1}^Jq_{dkj},\\
\hat q_{dkj}&amp;=\frac1{n_d}\sum_{i:D_i=d}\mathbf1\{Y_i=y_j,M_i=m_k\}.
\end{aligned}
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(p_{dk}\)</span>{% endraw %} retains its earlier meaning as a mediator margin. All stratum shares {% raw %}<span class="math inline">\(\theta_{lk}=P(M(0)=m_l,M(1)=m_k)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0\leq l,k&lt;K\)</span>{% endraw %}, are nuisance parameters. Let {% raw %}<span class="math inline">\(B\operatorname{vec}(\theta)\leq b\)</span>{% endraw %} denote prespecified linear restrictions on them, possibly an empty collection. Ordered monotonicity, for example, imposes {% raw %}<span class="math inline">\(\theta_{lk}=0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(l&gt;k\)</span>{% endraw %}. The same matrix must satisfy all restrictions jointly.</p>
<h4 id="mechanism-linear-null">
The joint population null
</h4>
<p>For a candidate {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, compatibility with full mediation is the following linear feasibility problem in {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} and auxiliary variables {% raw %}<span class="math inline">\(s_{kj}\)</span>{% endraw %}:</p>
{% raw %}<div class="math display">\[
\begin{aligned}
&amp;q_{dkj}\geq0,\qquad \sum_{k,j}q_{dkj}=1 &amp;&amp;(d=0,1),\\
&amp;\theta_{lk}\geq0,\qquad B\operatorname{vec}(\theta)\leq b,\\
&amp;\sum_k\theta_{lk}=\sum_jq_{0lj} &amp;&amp;(0\leq l&lt;K),\\
&amp;\sum_l\theta_{lk}=\sum_jq_{1kj} &amp;&amp;(0\leq k&lt;K),\\
&amp;s_{kj}\geq0,\qquad s_{kj}\geq q_{1kj}-q_{0kj} &amp;&amp;(k,j),\\
&amp;\sum_js_{kj}\leq\sum_{l\ne k}\theta_{lk} &amp;&amp;(0\leq k&lt;K).
\end{aligned}
\]</div>{% endraw %}
<p>Call the set of {% raw %}<span class="math inline">\(q\)</span>{% endraw %} admitting such a solution {% raw %}<span class="math inline">\(\mathcal Q_0\)</span>{% endraw %}. This is the finite-support formulation in <a href="https://arxiv.org/html/2404.11739v1#S4">Kwon and Roth (2024, v1, §4, equations (8)–(11))</a>, with {% raw %}<span class="math inline">\(s\)</span>{% endraw %} used to avoid confusing the slack variables with cell differences.</p>
<p>To verify the slack representation, a maximizing outcome subset includes precisely the positive differences, so</p>
{% raw %}<div class="math display">\[
\sup_A\Delta_k(A)=\sum_j(q_{1kj}-q_{0kj})_+.
\]</div>{% endraw %}
<p>Every admissible {% raw %}<span class="math inline">\(s_{kj}\)</span>{% endraw %} is at least this cell’s positive part. Conversely, choosing {% raw %}<span class="math inline">\(s_{kj}=(q_{1kj}-q_{0kj})_+\)</span>{% endraw %} is admissible whenever the sum of positive parts does not exceed the entrant mass. Thus the slack system is equivalent to all subset inequalities, not a relaxation. The coupling argument in Sections 2 and 6 proves that these joint restrictions are sufficient as well as necessary for the observable distribution to be compatible with the sharp null, under the maintained stratum restrictions.</p>
<p>Sampling error can make a binding population inequality fail at {% raw %}<span class="math inline">\(\hat q\)</span>{% endraw %}. For example, under monotonicity there are no entrants to state zero; if {% raw %}<span class="math inline">\(q_{10j}=q_{00j}\in(0,1)\)</span>{% endraw %}, the empirical difference can have either sign. Rejecting whenever {% raw %}<span class="math inline">\(\hat q\notin\mathcal Q_0\)</span>{% endraw %} therefore has no calibration to a chosen significance level. Changes in which cell differences are positive also make the optimum nonsmooth. The procedure below avoids estimating a limiting distribution for that optimum.</p>
<h4 id="mechanism-confidence-set-test">
A finite-sample confidence-set test
</h4>
<p>Fix {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(L=2KJ\)</span>{% endraw %} count all observable cells in both arms. For {% raw %}<span class="math inline">\(n_0,n_1&gt;0\)</span>{% endraw %}, set</p>
{% raw %}<div class="math display">\[
\epsilon_d=\sqrt{\frac{\log(2L/\alpha)}{2n_d}},
\qquad
\mathcal C_n=\left\{q:
\begin{array}{l}
q_{dkj}\geq0,\quad\sum_{k,j}q_{dkj}=1,\\
|q_{dkj}-\hat q_{dkj}|\leq\epsilon_d\quad\text{for every }d,k,j
\end{array}\right\}.
\]</div>{% endraw %}
<p>The simplex constraints automatically clip the intervals to feasible probabilities. Reject the joint null if and only if</p>
{% raw %}<div class="math display">\[
\mathcal C_n\cap\mathcal Q_0=\varnothing.
\]</div>{% endraw %}
<p>This is one linear feasibility problem in {% raw %}<span class="math inline">\((q,\theta,s)\)</span>{% endraw %}: append the confidence intervals to the population system and ask whether a solution exists. The mediator margins vary with the candidate {% raw %}<span class="math inline">\(q\)</span>{% endraw %} inside the confidence set. Fixing them at their empirical values while varying only the outcome probabilities would omit their sampling uncertainty. If either arm is empty, take the confidence set to be the entire product of the two probability simplices and define the test not to reject.</p>
<p><strong>Proposition (size control).</strong> Under the stated sampling model and the maintained stratum restrictions, this test has rejection probability at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for every finite sample size under full mediation. The bound holds uniformly over the null distributions, including distributions with zero cells and binding inequalities.</p>
<p><em>Proof.</em> For one cell in arm {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, the indicators are independent Bernoulli variables conditional on the assignment labels. For a Bernoulli variable {% raw %}<span class="math inline">\(H\)</span>{% endraw %} with mean {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(h(\lambda)=\log\mathbb E\exp\{\lambda(H-q)\}\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(h(0)=h&#39;(0)=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(h&#39;&#39;(\lambda)\)</span>{% endraw %} is the variance of a Bernoulli variable under exponential tilting, hence at most {% raw %}<span class="math inline">\(1/4\)</span>{% endraw %}. Integrating twice gives {% raw %}<span class="math inline">\(h(\lambda)\leq\lambda^2/8\)</span>{% endraw %} for all real {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}, including the degenerate cases {% raw %}<span class="math inline">\(q=0,1\)</span>{% endraw %}. Independence and Markov’s inequality imply</p>
{% raw %}<div class="math display">\[
P(\hat q-q\geq r\mid D_1,\ldots,D_n)
\leq\inf_{\lambda&gt;0}\exp\{-\lambda n_dr+n_d\lambda^2/8\}
=\exp(-2n_dr^2).
\]</div>{% endraw %}
<p>Apply the same argument to the lower tail. Thus each cell’s two-sided failure probability at {% raw %}<span class="math inline">\(r=\epsilon_d\)</span>{% endraw %} is at most {% raw %}<span class="math inline">\(\alpha/L\)</span>{% endraw %}. A union bound over all {% raw %}<span class="math inline">\(L\)</span>{% endraw %} cells gives</p>
{% raw %}<div class="math display">\[
P\{q\notin\mathcal C_n\mid D_1,\ldots,D_n\}\leq\alpha.
\]</div>{% endraw %}
<p>Under the null, the true {% raw %}<span class="math inline">\(q\)</span>{% endraw %} belongs to {% raw %}<span class="math inline">\(\mathcal Q_0\)</span>{% endraw %}, with the true nuisance shares providing a feasible witness. If it also belongs to {% raw %}<span class="math inline">\(\mathcal C_n\)</span>{% endraw %}, rejection is impossible. Conditional rejection probability is therefore at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} whenever both arms are nonempty, and zero otherwise. Averaging over the assignments proves the result. The inequalities do not depend on the particular cell probabilities, giving uniform finite-sample control. □</p>
<p>The exponential inequality just proved is the Bernoulli form of Hoeffding’s bound. No covariance estimate, inverse covariance matrix, differentiability of the optimum, or selection of binding constraints is used. Dependence among the multinomial cell counts does not invalidate the union bound. Zero cells cause no singularity. The price is conservativeness: size is bounded by {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}, not necessarily equal to it, and the coordinate intervals ignore correlations that could improve power. This confidence-set construction is a simple alternative to the asymptotic moment-inequality procedures discussed by Kwon and Roth, rather than a claim to reproduce one of their implementations.</p>
<h4 id="mechanism-test-example">
From probabilities to a test decision
</h4>
<p>Consider a hypothetical binary outcome and binary monotone mediator. List cells in the order {% raw %}<span class="math inline">\((m_0,y_1),(m_0,y_2),(m_1,y_1),(m_1,y_2)\)</span>{% endraw %}, and suppose {% raw %}<span class="math inline">\(n_0=n_1=10{,}000\)</span>{% endraw %} with empirical proportions</p>
{% raw %}<div class="math display">\[
\hat q_0=(0.25,0.45,0.15,0.15),\qquad
\hat q_1=(0.30,0.10,0.30,0.30).
\]</div>{% endraw %}
<p>At {% raw %}<span class="math inline">\(\alpha=0.05\)</span>{% endraw %}, {% raw %}<span class="math inline">\(L=8\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\epsilon_0=\epsilon_1=\sqrt{\log(320)/20000}\simeq0.01698\)</span>{% endraw %}. Every candidate in {% raw %}<span class="math inline">\(\mathcal C_n\)</span>{% endraw %} therefore satisfies</p>
{% raw %}<div class="math display">\[
q_{101}-q_{001}
\geq0.30-0.25-\epsilon_1-\epsilon_0
&gt;0.016.
\]</div>{% endraw %}
<p>Monotonicity sets {% raw %}<span class="math inline">\(\theta_{10}=0\)</span>{% endraw %}, so there are no entrants into {% raw %}<span class="math inline">\(m_0\)</span>{% endraw %}. The null requires {% raw %}<span class="math inline">\(q_{101}-q_{001}\leq0\)</span>{% endraw %}, a contradiction. The intersection is empty and the test rejects. This is a certificate of infeasibility using one necessary inequality; it does not plug in an estimate of the stayer share.</p>
<p>In a general implementation, form all cell counts, compute the two radii, and solve the joint system above. A feasible solution means nonrejection, even if some inequalities fail at {% raw %}<span class="math inline">\(\hat q\)</span>{% endraw %}. Infeasibility means rejection. Numerical solver failures or residuals near the feasibility tolerance should be treated as inconclusive until checked, rather than as statistical rejection. The conclusion concerns full mediation together with the maintained restrictions; failure of mediator monotonicity can also make that joint model incompatible with the data.</p>
<h4 id="mechanism-effect-projection">
Projection for an average direct effect
</h4>
<p>The same {% raw %}<span class="math inline">\(\mathcal C_n\)</span>{% endraw %} can give a confidence set for a specified stayer effect without imposing full mediation. For state {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, introduce selected stayer masses {% raw %}<span class="math inline">\(r_{dj}\)</span>{% endraw %} satisfying</p>
{% raw %}<div class="math display">\[
0\leq r_{dj}\leq q_{dkj},\qquad
\sum_jr_{dj}=\theta_{kk}\quad(d=0,1).
\]</div>{% endraw %}
<p>Retain the probability, stratum-margin, and {% raw %}<span class="math inline">\(B\operatorname{vec}(\theta)\leq b\)</span>{% endraw %} restrictions, but remove the full-mediation slack inequalities. For each candidate {% raw %}<span class="math inline">\(a\)</span>{% endraw %}, ask whether some {% raw %}<span class="math inline">\(q\in\mathcal C_n\)</span>{% endraw %}, jointly feasible {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\theta_{kk}&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(r\)</span>{% endraw %} satisfy</p>
{% raw %}<div class="math display">\[
\sum_j y_j(r_{1j}-r_{0j})=a\theta_{kk}.
\]</div>{% endraw %}
<p>The set of feasible {% raw %}<span class="math inline">\(a\)</span>{% endraw %} is a projected confidence set for {% raw %}<span class="math inline">\(ADE_k\)</span>{% endraw %}. The endpoints of its interval hull are the infimum and supremum of {% raw %}<span class="math inline">\(\sum_j y_j(r_{1j}-r_{0j})/\theta_{kk}\)</span>{% endraw %} over this enlarged feasible set; extrema need not be attained when the stayer share can approach zero. These are precisely the selections underlying the trimming bounds. For fixed {% raw %}<span class="math inline">\(a\)</span>{% endraw %} the restrictions are linear; positivity can be checked by maximizing {% raw %}<span class="math inline">\(\theta_{kk}\)</span>{% endraw %} subject to the weak constraints and verifying a positive maximum. On {% raw %}<span class="math inline">\(\{q\in\mathcal C_n\}\)</span>{% endraw %}, the true shares and stayer subdistributions are feasible, so the true {% raw %}<span class="math inline">\(ADE_k\)</span>{% endraw %} is included. Coverage is therefore at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} whenever the true stayer share is positive. If it is zero, the conditional effect is undefined; if arbitrarily small shares remain feasible, the projected interval may be uninformative. Estimating the endpoints and attaching ordinary standard errors would not supply this projection guarantee.</p>
<p>Merging outcome cells reduces the subsets available for detecting a discrepancy and can weaken power. Prespecified bins for a continuous outcome retain a valid test of full mediation, but not necessarily all of its testable implications. Choosing bins after inspecting outcomes needs separate calibration. Merging mediator states changes who counts as a stayer and still requires the separate justification discussed in the predecessor.</p>

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
{% raw %}<div class="math display">\[
(y-q)(s(y)-s_*(y))\geq0.
\]</div>{% endraw %}
<p>Below {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, both factors are nonpositive; above {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, both are nonnegative; at {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, their product is zero. Since {% raw %}<span class="math inline">\(\int(s-s_*)\,dF=0\)</span>{% endraw %}, integrability gives</p>
{% raw %}<div class="math display">\[
\int y(s-s_*)\,dF
=\int(y-q)(s-s_*)\,dF\geq0.
\]</div>{% endraw %}
<p>Thus the bottom-tail allocation minimizes the mean over every measurable selection rule, without assuming that an iterative exchange converges. Its numerator equals {% raw %}<span class="math inline">\(\int_0^aQ_F(u)\,du\)</span>{% endraw %} by the quantile representation. Reversing the cutoff rule gives the upper-tail maximum. When {% raw %}<span class="math inline">\(a=1\)</span>{% endraw %}, the only admissible selection is one almost surely and both bounds equal the observed mean. This also supplies the endpoint case where an unbounded distribution need not have a finite {% raw %}<span class="math inline">\(Q_F(1)\)</span>{% endraw %}.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-kwon_testing_2024" class="csl-entry" role="listitem">
Kwon, Soonwoo, and Jonathan Roth. 2024. <span>“Testing Mechanisms.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2404.11739">https://doi.org/10.48550/arXiv.2404.11739</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2024-07-13-testing-mediation-principal-strata-and-observable-bounds %}">Testing Mediation: Principal Strata and Observable Bounds</a></p></nav>

</div>
