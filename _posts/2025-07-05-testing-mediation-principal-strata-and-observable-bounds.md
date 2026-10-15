---
layout: "post"
title: "Testing Mediation: Principal Strata and Observable Bounds"
date: "2025-07-05"
tags: ["econometrics", "causal inference"]
excerpt: "Randomizing treatment does not randomize a mediator."
note_series: "Testing mechanisms"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Testing Mechanisms/stats.tex"
redirect_from: ["/2025/07/05/testing-a-causal-mechanism-with-potential-mediators/", "/2025/08/02/a-binary-mediator-and-principal-strata/", "/2025/08/31/multi-valued-mediators/", "/2025/09/29/bounds-on-the-fraction-affected-within-a-principal-stratum/"]
---

<div class="note-content" markdown="0">

<p>Suppose treatment changes both an intermediate variable and the final outcome. Could the entire outcome change be explained by movement in that intermediate variable? Randomizing treatment does not randomize the mediator, but it identifies distributions that any such explanation must reproduce. <span class="citation" data-cites="kwon_testing_2024">(<a href="#ref-kwon_testing_2024" role="doc-biblioref">Kwon and Roth 2024</a>)</span> uses those distributions to test the sharp claim of full mediation.</p>

<h3 data-note-section="1" id="23-0-principal-strata-and-the-null">1. Principal strata and the null</h3>
<p>Let {% raw %}<span class="math inline">\(D\)</span>{% endraw %} be randomized, {% raw %}<span class="math inline">\(M(d)\)</span>{% endraw %} the potential mediator, and {% raw %}<span class="math inline">\(Y(d,m)\)</span>{% endraw %} the potential outcome. The sharp null is {% raw %}<span class="math inline">\(Y(1,m)=Y(0,m)\)</span>{% endraw %} almost surely for every {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. For a finite mediator support {% raw %}<span class="math inline">\(\{m_0,\ldots,m_{K-1}\}\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
\theta_{lk}=\Pr(M(0)=m_l,M(1)=m_k).
\]</div>{% endraw %}
<p>The observed mediator distributions give the row and column sums of {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. Additional restrictions, such as monotonicity, define the feasible set {% raw %}<span class="math inline">\(\Theta_I\)</span>{% endraw %}. For an ordered mediator, monotonicity sets {% raw %}<span class="math inline">\(\theta_{lk}=0\)</span>{% endraw %} when {% raw %}<span class="math inline">\(l&gt;k\)</span>{% endraw %}.</p>

<h3 data-note-section="2" id="23-0-the-observable-inequality">2. The observable inequality</h3>
<p>Define the difference between two outcome subdistributions,</p>

{% raw %}<div class="math display">\[
\Delta_k(A)=\Pr(Y\in A,M=m_k\mid D=1)
-\Pr(Y\in A,M=m_k\mid D=0).
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\nu_k\)</span>{% endraw %} be the fraction of {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-stayers—those with {% raw %}<span class="math inline">\(M(0)=M(1)=m_k\)</span>{% endraw %}—whose outcome changes under treatment.</p>

<div id="mediation-inequality" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1</strong>. Random assignment implies</p>

{% raw %}<div class="math display">\[
\theta_{kk}\nu_k\ge
\left[\sup_A\Delta_k(A)-\sum_{l\ne k}\theta_{lk}\right]_+.
\]</div>{% endraw %}
<p>Hence the sharp null requires a single {% raw %}<span class="math inline">\(\theta\in\Theta_I\)</span>{% endraw %} for which {% raw %}<span class="math inline">\(\sup_A\Delta_k(A)\le\sum_{l\ne k}\theta_{lk}\)</span>{% endraw %} simultaneously for every {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>

</div>
<h3 data-note-section="3" id="23-0-account-for-the-possible-sources-of-change">3. Account for the possible sources of change</h3>
<p>An increase in the mass of {% raw %}<span class="math inline">\((Y\in A,M=m_k)\)</span>{% endraw %} can come from people who enter mediator state {% raw %}<span class="math inline">\(k\)</span>{% endraw %} under treatment. Their total mass is {% raw %}<span class="math inline">\(\sum_{l\ne k}\theta_{lk}\)</span>{% endraw %}. It can also come from stayers whose outcomes change. Their mass is at most {% raw %}<span class="math inline">\(\theta_{kk}\nu_k\)</span>{% endraw %}. People leaving state {% raw %}<span class="math inline">\(k\)</span>{% endraw %} can only subtract from this upper bound.</p>

<p>Taking the supremum over outcome sets gives the inequality. The argument only counts how much probability mass entrants and affected stayers can contribute; it does not require random assignment of the mediator.</p>

<p>For a binary monotone mediator, the two observed mediator probabilities determine the stratum shares. With several mediator values, the same marginal change can result from different movements between states. Compatibility with full mediation therefore asks whether at least one feasible allocation explains all the outcome differences.</p>

<h3 data-note-section="4" id="23-0-how-much-can-be-learned">4. How much can be learned</h3>
<p>Under ordered monotonicity, the smallest feasible stayer share has the closed form</p>

{% raw %}<div class="math display">\[
\theta_{kk}^{\min}=
\left[\Pr(M=m_k\mid D=1)
-(\Pr(M\ge m_k\mid D=1)-\Pr(M\ge m_k\mid D=0))\right]_+.
\]</div>{% endraw %}
<p>The allocation below supplies the remaining step: a feasible matrix attaining these minima jointly. Separate minimizations would not suffice, because their solutions might assign the same people to incompatible strata.</p>

<p>The restrictions are most informative when a substantial stayer mass is unavoidable. Binning a continuous mediator can create apparent stayers who actually change mediator values within a bin, so it needs an additional restriction on within-bin outcome effects. The <a href="{% post_url 2025-10-28-sharp-mechanism-bounds-average-effects-and-inference %}">sharpness construction and mean-effect bounds</a> explain what these inequalities exhaust and what remains unidentified.</p>

<h3 data-note-section="5" id="23-0-the-mass-accounting-proof-in-indicators">5. The mass-accounting proof in indicators</h3>
<p>Let {% raw %}<span class="math inline">\(S_{lk}=\{M(0)=m_l,M(1)=m_k\}\)</span>{% endraw %}, and abbreviate {% raw %}<span class="math inline">\(Y_d=Y(d,M(d))\)</span>{% endraw %}. Random assignment lets us write the observed difference as</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\Delta_k(A)
={}&amp;\mathbb{E}[\mathbf1_{S_{kk}}(\mathbf1(Y_1\in A)-\mathbf1(Y_0\in A))]\\
&amp;+\sum_{l\ne k}\mathbb{E}[\mathbf1_{S_{lk}}\mathbf1(Y_1\in A)]
-\sum_{j\ne k}\mathbb{E}[\mathbf1_{S_{kj}}\mathbf1(Y_0\in A)].
\end{aligned}
\]</div>{% endraw %}
<p>The last sum is nonnegative and is subtracted. Each entrant term is at most {% raw %}<span class="math inline">\(\theta_{lk}\)</span>{% endraw %}. For stayers,</p>

{% raw %}<div class="math display">\[
\mathbf1(Y_1\in A)-\mathbf1(Y_0\in A)
\leq\mathbf1(Y_1\ne Y_0).
\]</div>{% endraw %}
<p>The first term is therefore at most {% raw %}<span class="math inline">\(\theta_{kk}\nu_k\)</span>{% endraw %}. Taking the supremum over {% raw %}<span class="math inline">\(A\)</span>{% endraw %} proves the inequality. When {% raw %}<span class="math inline">\(\theta_{kk}=0\)</span>{% endraw %}, the unconditional affected mass is zero and the conditional fraction {% raw %}<span class="math inline">\(\nu_k\)</span>{% endraw %} is not defined; one should retain the inequality in terms of mass rather than divide by zero.</p>

<p>The supremum permits {% raw %}<span class="math inline">\(A\)</span>{% endraw %} to contain disconnected parts of the outcome support. Threshold sets {% raw %}<span class="math inline">\((-\infty,y]\)</span>{% endraw %} form a smaller class and can miss a violation, as the three-outcome example below shows. For a discrete outcome, the full restriction ranges over all subsets of cells.</p>

<h3 data-note-section="6" id="23-0-a-binary-mediator-example">6. A binary-mediator example</h3>
<p>Suppose {% raw %}<span class="math inline">\(M(1)\geq M(0)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\Pr(M=1\mid D=0)=0.3\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\Pr(M=1\mid D=1)=0.6\)</span>{% endraw %}. The feasible strata are then</p>

{% raw %}<div class="math display">\[
\theta_{00}=0.4,\qquad\theta_{01}=0.3,
\qquad\theta_{11}=0.3,\qquad\theta_{10}=0.
\]</div>{% endraw %}
<p>There are no entrants to mediator state zero. Full mediation thus requires {% raw %}<span class="math inline">\(\Delta_0(A)\leq0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(A\)</span>{% endraw %}: the treated state-zero subdistribution must be a submeasure of the control state-zero subdistribution.</p>

<p>For a binary outcome, imagine state-zero subdistribution masses {% raw %}<span class="math inline">\((0.30,0.10)\)</span>{% endraw %} under treatment and {% raw %}<span class="math inline">\((0.25,0.45)\)</span>{% endraw %} under control, listed at outcomes zero and one. Their totals are {% raw %}<span class="math inline">\(0.4\)</span>{% endraw %} and {% raw %}<span class="math inline">\(0.7\)</span>{% endraw %}, as required. Nevertheless,</p>

{% raw %}<div class="math display">\[
\sup_A\Delta_0(A)=0.05.
\]</div>{% endraw %}
<p>Treatment has increased the mass at outcome zero within a mediator state nobody enters. At least {% raw %}<span class="math inline">\(0.05\)</span>{% endraw %} of the population must therefore be state-zero stayers whose outcomes change. Among the {% raw %}<span class="math inline">\(0.4\)</span>{% endraw %} stayers, the affected fraction is at least {% raw %}<span class="math inline">\(0.05/0.4=0.125\)</span>{% endraw %}.</p>

<p>At mediator state one, up to {% raw %}<span class="math inline">\(0.3\)</span>{% endraw %} of the population enters. The corresponding restriction is {% raw %}<span class="math inline">\(\sup_A\Delta_1(A)\leq0.3\)</span>{% endraw %}. A change there can be explained by these entrants before it forces any direct effect among stayers. This asymmetry is the information supplied by mediator monotonicity.</p>

<h3 data-note-section="7" id="23-0-why-a-single-feasible-stratum-matrix-matters">7. Why a single feasible stratum matrix matters</h3>
<p>Let {% raw %}<span class="math inline">\(p_{dk}=\Pr(M=m_k\mid D=d)\)</span>{% endraw %}. The matrix must satisfy</p>

{% raw %}<div class="math display">\[
\sum_k\theta_{lk}=p_{0l},\qquad
\sum_l\theta_{lk}=p_{1k},\qquad\theta_{lk}\geq0.
\]</div>{% endraw %}
<p>For ordered monotonicity, entries below the diagonal vanish. The net mass crossing the threshold {% raw %}<span class="math inline">\(m_k\)</span>{% endraw %} is</p>

{% raw %}<div class="math display">\[
c_k\triangleq\Pr(M\geq m_k\mid D=1)
-\Pr(M\geq m_k\mid D=0)
=\sum_{l&lt;k,j\geq k}\theta_{lj}.
\]</div>{% endraw %}
<p>Every entrant to state {% raw %}<span class="math inline">\(k\)</span>{% endraw %} from below is part of this crossing mass. Thus</p>

{% raw %}<div class="math display">\[
\theta_{kk}=p_{1k}-\sum_{l&lt;k}\theta_{lk}
\geq p_{1k}-c_k,
\]</div>{% endraw %}
<p>Nonnegativity now gives the stated positive-part bound. This establishes necessity. Joint attainment requires an allocation preserving both margins; the construction below supplies it.</p>

<p>For general restrictions on {% raw %}<span class="math inline">\(\Theta_I\)</span>{% endraw %}, the corresponding test is a joint feasibility problem: find one nonnegative matrix with the observed margins satisfying every outcome inequality. Optimizing coordinates separately need not produce such a matrix.</p>

<h3 data-note-section="8" id="23-0-what-coarsening-changes">8. What coarsening changes</h3>
<p>For discrete outcomes with cells {% raw %}<span class="math inline">\(y_1,\ldots,y_J\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\delta_{kj}\)</span>{% endraw %} be the treated-minus-control subdistribution difference in cell {% raw %}<span class="math inline">\(j\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[
\sup_A\Delta_k(A)=\sum_{j=1}^J(\delta_{kj})_+.
\]</div>{% endraw %}
<p>The maximizing set includes exactly the positive-difference cells. After merging two cells, their contribution becomes the positive part of their sum. Since {% raw %}<span class="math inline">\((a+b)_+\leq a_++b_+\)</span>{% endraw %}, merging cannot strengthen the restriction.</p>

<p>The difference between threshold tests and the full set restriction can be substantial. Consider three ordered outcome values, with state-{% raw %}<span class="math inline">\(k\)</span>{% endraw %} subdistribution masses {% raw %}<span class="math inline">\((0.18,0.04,0.18)\)</span>{% endraw %} under treatment and {% raw %}<span class="math inline">\((0.10,0.20,0.10)\)</span>{% endraw %} under control. Both cell totals are {% raw %}<span class="math inline">\(0.40\)</span>{% endraw %}, and the differences are {% raw %}<span class="math inline">\((0.08,-0.16,0.08)\)</span>{% endraw %}.</p>

<p>Every lower-threshold difference has absolute value at most {% raw %}<span class="math inline">\(0.08\)</span>{% endraw %}: the cumulative differences are {% raw %}<span class="math inline">\(0.08,-0.08,0\)</span>{% endraw %}. But the set consisting of the first and third outcomes gives</p>

{% raw %}<div class="math display">\[
\sup_A\Delta_k(A)=0.08+0.08=0.16.
\]</div>{% endraw %}
<p>If the feasible entrant mass is {% raw %}<span class="math inline">\(0.10\)</span>{% endraw %} and the stayer mass is {% raw %}<span class="math inline">\(0.30\)</span>{% endraw %}, the full inequality requires at least {% raw %}<span class="math inline">\(0.06\)</span>{% endraw %} of population mass, or {% raw %}<span class="math inline">\(0.06/0.30=0.20\)</span>{% endraw %} of these stayers, to change outcome. A test examining only threshold differences would miss this violation.</p>

<p>For general subdensities, write {% raw %}<span class="math inline">\(p_{dk}\)</span>{% endraw %} for their total masses. The identity {% raw %}<span class="math inline">\(x_+=(|x|+x)/2\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
\sup_A\Delta_k(A)
=\frac12\left(\int|f_{1k}-f_{0k}|+p_{1k}-p_{0k}\right).
\]</div>{% endraw %}
<p>These measures have their original mediator-cell masses. Normalizing each to a probability distribution would discard the composition change that the entrant and stayer calculation uses.</p>

<p>Treatment randomization thus identifies the two margins and the outcome subdistributions. Restrictions on mediator movement bound how much of an outcome discrepancy those composition changes can explain. Any excess requires affected stayers.</p>

<p>Mediator coarsening changes the principal strata themselves. Someone moving from {% raw %}<span class="math inline">\(m\)</span>{% endraw %} to {% raw %}<span class="math inline">\(m&#x27;\)</span>{% endraw %} inside one bin becomes an apparent stayer, although full mediation permits {% raw %}<span class="math inline">\(Y(0,m)\ne Y(0,m&#x27;)\)</span>{% endraw %}. Treating that difference as evidence of a direct effect would be incorrect without an additional restriction on within-bin responses. The <a href="{% post_url 2025-10-28-sharp-mechanism-bounds-average-effects-and-inference %}">companion construction</a> keeps the mediator states fixed and shows how the distributional discrepancy translates into sharp affected-mass and mean-effect bounds.</p>

<h3 id="23-0-constructing-all-minimum-stayer-shares-at-once">Constructing all minimum stayer shares at once</h3>
<p>Write {% raw %}<span class="math inline">\(F_d(k)=\sum_{j\leq k}p_{dj}\)</span>{% endraw %} and set {% raw %}<span class="math inline">\(F_d(-1)=0\)</span>{% endraw %}. Ordered monotonicity requires {% raw %}<span class="math inline">\(F_0(k)\geq F_1(k)\)</span>{% endraw %} at every cutoff. The crossing mass in the earlier calculation is {% raw %}<span class="math inline">\(c_k=F_0(k-1)-F_1(k-1)\)</span>{% endraw %}. The following allocation proves joint attainment of the diagonal lower bounds.</p>
<p>Process destination columns {% raw %}<span class="math inline">\(k=0,\ldots,K-1\)</span>{% endraw %} in order. Before filling column {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, retain the unallocated mass from origin rows {% raw %}<span class="math inline">\(0,\ldots,k-1\)</span>{% endraw %} in a pool. Its total is {% raw %}<span class="math inline">\(c_k\)</span>{% endraw %}: those rows supplied {% raw %}<span class="math inline">\(F_0(k-1)\)</span>{% endraw %} mass and the already filled columns used {% raw %}<span class="math inline">\(F_1(k-1)\)</span>{% endraw %}. Fill as much of column {% raw %}<span class="math inline">\(k\)</span>{% endraw %} as possible from this pool, in any order. If its demand {% raw %}<span class="math inline">\(p_{1k}\)</span>{% endraw %} exceeds the pool, fill the deficit from row {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. This assigns</p>
<p>{% raw %}<div class="math display">\[
\theta_{kk}=(p_{1k}-c_k)_+.
\]</div>{% endraw %}</p>
<p>There is enough mass in row {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(F_0(k)\geq F_1(k)\)</span>{% endraw %} is precisely {% raw %}<span class="math inline">\(p_{0k}+c_k\geq p_{1k}\)</span>{% endraw %}. Add the unused part of row {% raw %}<span class="math inline">\(k\)</span>{% endraw %} to the pool. Its new total is {% raw %}<span class="math inline">\(c_k+p_{0k}-p_{1k}=c_{k+1}\)</span>{% endraw %}. This proves the induction. At the last column the pool is exhausted because both margins total one. No mass ever moves to a lower destination, and every row and column margin is preserved. A single feasible matrix therefore attains all the minimum stayer shares simultaneously. This construction uses ordered monotonicity alone; additional restrictions on the stratum matrix can rule it out.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-kwon_testing_2024" class="csl-entry" role="listitem">
Kwon, Soonwoo, and Jonathan Roth. 2024. <span>“Testing Mechanisms.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2404.11739">https://doi.org/10.48550/arXiv.2404.11739</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2025-10-28-sharp-mechanism-bounds-average-effects-and-inference %}">Sharp Mechanism Bounds, Average Effects, and Inference</a></p></nav>

</div>
