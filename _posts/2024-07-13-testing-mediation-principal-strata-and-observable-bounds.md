---
layout: "post"
title: "Testing Mediation: Principal Strata and Observable Bounds"
date: "2024-07-13"
tags: ["econometrics", "causal inference"]
excerpt: "Principal-stratum restrictions, observable subdistribution bounds, and sensitivity to mediator movements."
note_series: "Testing mechanisms"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Testing Mechanisms/stats.tex"
redirect_from: ["/2025/07/05/testing-a-causal-mechanism-with-potential-mediators/", "/2025/07/05/testing-mediation-principal-strata-and-observable-bounds/", "/2025/08/02/a-binary-mediator-and-principal-strata/", "/2025/08/31/multi-valued-mediators/", "/2025/09/29/bounds-on-the-fraction-affected-within-a-principal-stratum/"]
---

<div class="note-content" markdown="0">

<p>Random assignment identifies the joint distribution of the outcome and mediator under each treatment. It does not identify the effect of the mediator on the outcome. Nevertheless, the joint distributions of the outcome and mediator restrict the claim that treatment operates entirely through that mediator. These restrictions arise because individuals whose mediator is unchanged cannot have a treatment effect under full mediation.</p>
<p>This post develops the experimental framework of <a href="#ref-kwon_testing_2024">Kwon and Roth, <em>Testing Mechanisms</em></a>. The <a href="{% post_url 2024-07-18-sharp-mechanism-bounds-average-effects-and-inference %}">companion post</a> proves sharpness, derives average-effect bounds, and develops inference. The exposition was revised on October 23, 2026, using arXiv version 3.</p>
<h3 data-note-section="1" id="23-0-principal-strata-and-the-null">1. Potential variables and maintained assumptions</h3>
<p>Let {% raw %}<span class="math inline">\(D\in\{0,1\}\)</span>{% endraw %} denote treatment. The potential mediator {% raw %}<span class="math inline">\(M(d)\)</span>{% endraw %} takes values in the finite set {% raw %}<span class="math inline">\(\mathcal M=\{m_0,\ldots,m_{K-1}\}\)</span>{% endraw %}, and the potential outcome {% raw %}<span class="math inline">\(Y(d,m)\)</span>{% endraw %} is real-valued. The mediator values may be scalars or vectors. All potential variables are defined on one probability space. Write</p>
<p>{% raw %}<span class="math display">\[
Y_d=Y(d,M(d)),\qquad d\in\{0,1\}.
\]</span>{% endraw %}</p>
<p><strong>Assumption A1 (Consistency).</strong> The observed variables satisfy {% raw %}<span class="math inline">\(M=M(D)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y=Y_D\)</span>{% endraw %}. Treatment and mediator values refer to well-defined interventions, with no dependence on other individuals' assignments in this model.</p>
<p><strong>Assumption A2 (Random assignment and overlap).</strong></p>
<p>{% raw %}<span class="math display">\[
D\mathrel{\perp\!\!\!\perp}
\bigl(M(0),M(1),\{Y(d,m):d\in\{0,1\},m\in\mathcal M\}\bigr),
\qquad 0&lt;P(D=1)&lt;1.
\]</span>{% endraw %}</p>
<p>The identification arguments concern the population law of one individual. Independence across sampled individuals is a separate assumption used for inference in the companion post.</p>
<p>The <strong>sharp null of full mediation</strong> is</p>
<p>{% raw %}<span class="math display">\[
H_0:\quad Y(1,m)=Y(0,m)\quad\text{almost surely for every }m\in\mathcal M.
\]</span>{% endraw %}</p>
<p>Because {% raw %}<span class="math inline">\(\mathcal M\)</span>{% endraw %} is finite, the equalities can be imposed on one event of probability one. They do not require {% raw %}<span class="math inline">\(Y_1=Y_0\)</span>{% endraw %}: changing the mediator can change the outcome under {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %}. For a vector-valued mediator, the null concerns mediation through the entire vector.</p>
<p>Define the principal strata and their probabilities by</p>
<p>{% raw %}<span class="math display">\[
S_{lk}=\{M(0)=m_l,M(1)=m_k\},\qquad
\theta_{lk}=P(S_{lk}),\qquad 0\leq l,k&lt;K.
\]</span>{% endraw %}</p>
<p>Individuals in {% raw %}<span class="math inline">\(S_{kk}\)</span>{% endraw %} are <em>stayers</em>. Individuals in {% raw %}<span class="math inline">\(S_{lk}\)</span>{% endraw %} with {% raw %}<span class="math inline">\(l\ne k\)</span>{% endraw %} move from state {% raw %}<span class="math inline">\(l\)</span>{% endraw %} to state {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. The paper calls these groups {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-always-takers and {% raw %}<span class="math inline">\(lk\)</span>{% endraw %}-compliers, respectively; the latter terminology includes downward movements when they are allowed.</p>
<p><strong>Assumption A3 (Restrictions on mediator movements).</strong> The matrix {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} belongs to a specified nonempty closed subset {% raw %}<span class="math inline">\(R\)</span>{% endraw %} of</p>
<p>{% raw %}<span class="math display">\[
\Delta_{K^2-1}
=\left\{\vartheta\in\mathbb R^{K\times K}:
\vartheta_{lk}\geq0,\ \sum_{l,k}\vartheta_{lk}=1\right\}.
\]</span>{% endraw %}</p>
<p>The restriction concerns mediator movements, not assignment of the mediator. No independence between {% raw %}<span class="math inline">\(M(d)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y(d&#39;,m)\)</span>{% endraw %} is imposed. Closedness ensures that the feasible sets below are compact; linear programming additionally requires that {% raw %}<span class="math inline">\(R\)</span>{% endraw %} be given by linear constraints.</p>
<h3 data-note-section="2" id="23-0-why-a-single-feasible-stratum-matrix-matters">2. Identified margins and feasible principal strata</h3>
<p>Let</p>
<p>{% raw %}<span class="math display">\[
p_{dk}=P(M=m_k\mid D=d),\qquad
\mu_{dk}(A)=P(Y\in A,M=m_k\mid D=d),
\quad A\in\mathscr B(\mathbb R).
\]</span>{% endraw %}</p>
<p>Under A1–A2, {% raw %}<span class="math inline">\(\mu_{dk}(A)=P(Y_d\in A,M(d)=m_k)\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\mu_{dk}\)</span>{% endraw %} is an identified subprobability measure with total mass {% raw %}<span class="math inline">\(p_{dk}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(p_{dk}&gt;0\)</span>{% endraw %}, the conditional outcome distribution in the cell is {% raw %}<span class="math inline">\(\mu_{dk}/p_{dk}\)</span>{% endraw %}. Keeping the original mass is necessary for the bounds below.</p>
<p>The feasible set of principal-stratum shares is</p>
<p>{% raw %}<span class="math display">\[
\Theta_I=\left\{\vartheta\in R:
\sum_k\vartheta_{lk}=p_{0l}\ (0\leq l&lt;K),\quad
\sum_l\vartheta_{lk}=p_{1k}\ (0\leq k&lt;K)
\right\}.
\]</span>{% endraw %}</p>
<p>Here {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} denotes the true shares and {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %} a candidate matrix. If {% raw %}<span class="math inline">\(\Theta_I\)</span>{% endraw %} is empty, the mediator margins already contradict the maintained restrictions. Statements about compatibility with full mediation must then be distinguished from a rejection attributable specifically to outcome restrictions. Unless stated otherwise, assume {% raw %}<span class="math inline">\(\Theta_I\ne\varnothing\)</span>{% endraw %}.</p>
<p>Several choices of {% raw %}<span class="math inline">\(R\)</span>{% endraw %} are useful:</p>
<ul>
<li>For an ordered scalar mediator, {% raw %}<span class="math inline">\(M(1)\geq M(0)\)</span>{% endraw %} imposes {% raw %}<span class="math inline">\(\vartheta_{lk}=0\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(l&gt;k\)</span>{% endraw %}.</li>
<li>Allowing a fraction at most {% raw %}<span class="math inline">\(\bar d\)</span>{% endraw %} to violate this ordering imposes {% raw %}<span class="math inline">\(\sum_{l&gt;k}\vartheta_{lk}\leq\bar d\)</span>{% endraw %}.</li>
<li>For vector-valued {% raw %}<span class="math inline">\(m_k\)</span>{% endraw %}, elementwise monotonicity imposes {% raw %}<span class="math inline">\(\vartheta_{lk}=0\)</span>{% endraw %} unless {% raw %}<span class="math inline">\(m_l\preceq m_k\)</span>{% endraw %}. A bound on violations replaces these zeros by {% raw %}<span class="math inline">\(\sum_{m_l\not\preceq m_k}\vartheta_{lk}\leq\bar d\)</span>{% endraw %}.</li>
<li>A bound on the frequency of large mediator changes takes the form {% raw %}<span class="math inline">\(\sum_{\|m_k-m_l\|&gt;\kappa}\vartheta_{lk}\leq\bar d\)</span>{% endraw %} for specified {% raw %}<span class="math inline">\(\kappa\geq0\)</span>{% endraw %}.</li>
<li>Without restrictions on movements, take {% raw %}<span class="math inline">\(R=\Delta_{K^2-1}\)</span>{% endraw %}.</li>
</ul>
<p>All these sets are polyhedral. Their parameters must be treated as maintained restrictions or explicit sensitivity parameters.</p>
<h3 data-note-section="3" id="23-0-the-observable-inequality">3. A lower bound on affected stayers</h3>
<p>Define</p>
<p>{% raw %}<span class="math display">\[
\Delta_k(A)=\mu_{1k}(A)-\mu_{0k}(A),\qquad
b_k=\sup_{A\in\mathscr B(\mathbb R)}\Delta_k(A).
\]</span>{% endraw %}</p>
<p>The unconditional mass of affected stayers is</p>
<p>{% raw %}<span class="math display">\[
r_k=P(S_{kk},Y_1\ne Y_0).
\]</span>{% endraw %}</p>
<p>When {% raw %}<span class="math inline">\(\theta_{kk}&gt;0\)</span>{% endraw %}, the corresponding conditional fraction is {% raw %}<span class="math inline">\(\nu_k=r_k/\theta_{kk}\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(\theta_{kk}=0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(r_k=0\)</span>{% endraw %} and the conditional fraction is undefined. Formulating the basic result in terms of {% raw %}<span class="math inline">\(r_k\)</span>{% endraw %} covers both cases without a convention for conditioning on a null event.</p>
<span id="23-0-the-mass-accounting-proof-in-indicators"></span>
<div id="mediation-inequality" class="proposition" data-note-number="1" data-note-kind="Proposition">
<p><strong>Proposition 1 (Affected-stayer bound).</strong> Under A1–A2,</p>
<p>{% raw %}<span class="math display">\[
r_k\geq\left[b_k-\sum_{l\ne k}\theta_{lk}\right]_+
=\left[b_k-p_{1k}+\theta_{kk}\right]_+,
\qquad 0\leq k&lt;K,
\]</span>{% endraw %}</p>
<p>where {% raw %}<span class="math inline">\(x_+=\max\{x,0\}\)</span>{% endraw %}. Consequently, A1–A3 and {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %} require a single {% raw %}<span class="math inline">\(\vartheta\in\Theta_I\)</span>{% endraw %} satisfying</p>
<p>{% raw %}<span class="math display">\[
b_k\leq p_{1k}-\vartheta_{kk}\qquad\text{for every }k.
\]</span>{% endraw %}</p>
</div>
<div class="proof">
<p><strong>Proof.</strong> Partition the treated cell into stayers and entrants and the control cell into stayers and leavers. Random assignment and consistency give, for every Borel set {% raw %}<span class="math inline">\(A\)</span>{% endraw %},</p>
<p>{% raw %}<span class="math display">\[
\begin{aligned}
\Delta_k(A)
={}&amp;\mathbb E\left[\mathbf1_{S_{kk}}
 \{\mathbf1_{\{Y_1\in A\}}-\mathbf1_{\{Y_0\in A\}}\}\right]\\
&amp;+\sum_{l\ne k}\mathbb E[\mathbf1_{S_{lk}}\mathbf1_{\{Y_1\in A\}}]
-\sum_{j\ne k}\mathbb E[\mathbf1_{S_{kj}}\mathbf1_{\{Y_0\in A\}}].
\end{aligned}
\]</span>{% endraw %}</p>
<p>The stayer term is at most {% raw %}<span class="math inline">\(r_k\)</span>{% endraw %}, since</p>
<p>{% raw %}<span class="math display">\[
\mathbf1_{\{Y_1\in A\}}-\mathbf1_{\{Y_0\in A\}}
\leq\mathbf1_{\{Y_1\ne Y_0\}}.
\]</span>{% endraw %}</p>
<p>Each entrant term is at most {% raw %}<span class="math inline">\(\theta_{lk}\)</span>{% endraw %}, and the leaver terms are nonnegative and subtracted. Hence {% raw %}<span class="math inline">\(\Delta_k(A)\leq r_k+\sum_{l\ne k}\theta_{lk}\)</span>{% endraw %}. Taking the supremum over {% raw %}<span class="math inline">\(A\)</span>{% endraw %} and using {% raw %}<span class="math inline">\(r_k\geq0\)</span>{% endraw %} proves the bound. The column-margin identity gives the second expression. Under {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y_1=Y_0\)</span>{% endraw %} on every {% raw %}<span class="math inline">\(S_{kk}\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(r_k=0\)</span>{% endraw %}. The true matrix {% raw %}<span class="math inline">\(\theta\in\Theta_I\)</span>{% endraw %} then satisfies all the displayed restrictions simultaneously. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>The inequality allocates observed changes between entrants and affected stayers. Its derivation does not condition on the observed mediator as though it were randomized. Nor does rejection isolate full mediation from A1–A3: an incorrect restriction on mediator movements can also produce rejection.</p>
<h3 data-note-section="4" id="23-0-account-for-the-possible-sources-of-change">4. Overlap of the observed subdistributions</h3>
<p>The supremum over sets has an explicit measure-theoretic representation. Let</p>
<p>{% raw %}<span class="math display">\[
\lambda=\sum_{d=0}^1\sum_{k=0}^{K-1}\mu_{dk}.
\]</span>{% endraw %}</p>
<p>This finite measure has total mass two and dominates every {% raw %}<span class="math inline">\(\mu_{dk}\)</span>{% endraw %}. By the <a href="{% post_url 2021-11-29-the-radon-nikodym-theorem %}">Radon–Nikodym theorem</a>, write {% raw %}<span class="math inline">\(f_{dk}=d\mu_{dk}/d\lambda\)</span>{% endraw %}. These densities integrate to {% raw %}<span class="math inline">\(p_{dk}\)</span>{% endraw %}, not to one. Define</p>
<p>{% raw %}<span class="math display">\[
h_k=\min(f_{0k},f_{1k}),\qquad
H_k(A)=\int_A h_k\,d\lambda,\qquad O_k=H_k(\mathbb R).
\]</span>{% endraw %}</p>
<div id="mediation-overlap" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2 (Subdistribution overlap).</strong> For every {% raw %}<span class="math inline">\(k\)</span>{% endraw %},</p>
<p>{% raw %}<span class="math display">\[
\begin{aligned}
b_k
&amp;=\int(f_{1k}-f_{0k})_+\,d\lambda
=p_{1k}-O_k\\
&amp;=\frac12\left(\int|f_{1k}-f_{0k}|\,d\lambda+p_{1k}-p_{0k}\right).
\end{aligned}
\]</span>{% endraw %}</p>
<p>Thus Proposition 1 is equivalently {% raw %}<span class="math inline">\(r_k\geq(\theta_{kk}-O_k)_+\)</span>{% endraw %}, and the null restrictions are {% raw %}<span class="math inline">\(\vartheta_{kk}\leq O_k\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><strong>Proof.</strong> Set {% raw %}<span class="math inline">\(g=f_{1k}-f_{0k}\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(A\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\int_A g\,d\lambda\leq\int g_+\,d\lambda\)</span>{% endraw %}, with equality for {% raw %}<span class="math inline">\(A=\{g&gt;0\}\)</span>{% endraw %}. The identities {% raw %}<span class="math inline">\(g_+=f_{1k}-\min(f_{0k},f_{1k})\)</span>{% endraw %} and {% raw %}<span class="math inline">\(2g_+=|g|+g\)</span>{% endraw %} give the two expressions. Subtracting {% raw %}<span class="math inline">\(p_{1k}-\theta_{kk}\)</span>{% endraw %} proves the last assertion. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>The common measure {% raw %}<span class="math inline">\(H_k\)</span>{% endraw %} is intrinsic: any measure dominated by both {% raw %}<span class="math inline">\(\mu_{0k}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu_{1k}\)</span>{% endraw %} has a {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}-density bounded by {% raw %}<span class="math inline">\(h_k\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(O_k\)</span>{% endraw %} is the largest mass that can be assigned the same outcome in both cells. This interpretation also proves that the overlap does not depend on the chosen dominating measure.</p>
<p>For a discrete outcome with distinct support points {% raw %}<span class="math inline">\(y_1,\ldots,y_J\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(q_{dkj}=\mu_{dk}(\{y_j\})\)</span>{% endraw %}. Then</p>
<p>{% raw %}<span class="math display">\[
b_k=\sum_{j=1}^J(q_{1kj}-q_{0kj})_+,
\qquad O_k=\sum_{j=1}^J\min(q_{0kj},q_{1kj}).
\]</span>{% endraw %}</p>
<p>The maximizing set contains every positive-difference cell. Restricting attention to lower intervals {% raw %}<span class="math inline">\((-\infty,y]\)</span>{% endraw %} need not recover this set.</p>
<h3 data-note-section="5" id="23-0-a-binary-mediator-example">5. Binary mediators and observable violations</h3>
<p>Suppose {% raw %}<span class="math inline">\(\mathcal M=\{0,1\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M(1)\geq M(0)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(a_d=P(M=1\mid D=d)\)</span>{% endraw %}. Feasibility requires {% raw %}<span class="math inline">\(a_1\geq a_0\)</span>{% endraw %}, and the shares are identified:</p>
<p>{% raw %}<span class="math display">\[
\theta_{00}=1-a_1,\qquad \theta_{01}=a_1-a_0,
\qquad \theta_{11}=a_0,\qquad\theta_{10}=0.
\]</span>{% endraw %}</p>
<p>There are no entrants into state zero, so full mediation requires {% raw %}<span class="math inline">\(\mu_{10}\leq\mu_{00}\)</span>{% endraw %} as measures. For state one, the restriction is {% raw %}<span class="math inline">\(b_1\leq a_1-a_0\)</span>{% endraw %}. Since</p>
<p>{% raw %}<span class="math display">\[
\sup_A\{\mu_{01}(A)-\mu_{11}(A)\}
=b_1-(p_{11}-p_{01}),
\]</span>{% endraw %}</p>
<p>the latter restriction is equivalent to {% raw %}<span class="math inline">\(\mu_{01}\leq\mu_{11}\)</span>{% endraw %}. These two measure inequalities are the binary monotonicity restrictions associated with instrument-validity testing when treatment is viewed as an instrument for the mediator. No nonexperimental identification argument is needed here.</p>
<p>For example, take {% raw %}<span class="math inline">\(a_0=0.3\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a_1=0.6\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\((\theta_{00},\theta_{01},\theta_{11})=(0.4,0.3,0.3)\)</span>{% endraw %}. Suppose the state-zero outcome masses at {% raw %}<span class="math inline">\(Y=0,1\)</span>{% endraw %} are {% raw %}<span class="math inline">\((0.30,0.10)\)</span>{% endraw %} under treatment and {% raw %}<span class="math inline">\((0.25,0.45)\)</span>{% endraw %} under control. Their totals agree with the mediator margins, but</p>
<p>{% raw %}<span class="math display">\[
b_0=(0.30-0.25)_++(0.10-0.45)_+=0.05.
\]</span>{% endraw %}</p>
<p>Proposition 1 gives {% raw %}<span class="math inline">\(r_0\geq0.05\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu_0\geq0.05/0.4=0.125\)</span>{% endraw %}. The treatment-induced increase in mass at outcome zero cannot be supplied by entrants into this mediator state.</p>
<p>For an example requiring a disconnected outcome set, take state-{% raw %}<span class="math inline">\(k\)</span>{% endraw %} masses {% raw %}<span class="math inline">\((0.18,0.04,0.18)\)</span>{% endraw %} under treatment and {% raw %}<span class="math inline">\((0.10,0.20,0.10)\)</span>{% endraw %} under control at three ordered outcomes. The differences are {% raw %}<span class="math inline">\((0.08,-0.16,0.08)\)</span>{% endraw %}. Every lower-interval difference has absolute value at most {% raw %}<span class="math inline">\(0.08\)</span>{% endraw %}, but the first and third cells together give {% raw %}<span class="math inline">\(b_k=0.16\)</span>{% endraw %}. If a feasible matrix has stayer mass {% raw %}<span class="math inline">\(0.30\)</span>{% endraw %} and entrant mass {% raw %}<span class="math inline">\(0.10\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(r_k\geq0.06\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\nu_k\geq0.20\)</span>{% endraw %}. Lower-interval comparisons would miss this violation.</p>
<h3 data-note-section="6" id="23-0-how-much-can-be-learned">6. Minimum stayer shares under ordered monotonicity</h3>
<p>For a general nonempty {% raw %}<span class="math inline">\(\Theta_I\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(t_k^{\min}=\min_{\vartheta\in\Theta_I}\vartheta_{kk}\)</span>{% endraw %}. Compactness ensures attainment for each coordinate. Separate minimizers need not form one feasible matrix. Ordered monotonicity alone has the stronger property below.</p>
<span id="23-0-constructing-all-minimum-stayer-shares-at-once"></span>
<div id="mediation-minimum-stayers" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3 (Simultaneous minimum stayer shares).</strong> Suppose {% raw %}<span class="math inline">\(m_0&lt;\cdots&lt;m_{K-1}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R\)</span>{% endraw %} imposes only {% raw %}<span class="math inline">\(\vartheta_{lk}=0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(l&gt;k\)</span>{% endraw %}. Define</p>
<p>{% raw %}<span class="math display">\[
F_d(k)=\sum_{j=0}^k p_{dj},\qquad F_d(-1)=0,\qquad
c_k=F_0(k-1)-F_1(k-1).
\]</span>{% endraw %}</p>
<p>The set {% raw %}<span class="math inline">\(\Theta_I\)</span>{% endraw %} is nonempty if and only if {% raw %}<span class="math inline">\(F_0(k)\geq F_1(k)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. When it is nonempty,</p>
<p>{% raw %}<span class="math display">\[
t_k^{\min}=(p_{1k}-c_k)_+
=\left[p_{1k}-\{P(M\geq m_k\mid D=1)-P(M\geq m_k\mid D=0)\}\right]_+,
\]</span>{% endraw %}</p>
<p>and one feasible matrix attains these minima for every {% raw %}<span class="math inline">\(k\)</span>{% endraw %} simultaneously.</p>
</div>
<div class="proof">
<p><strong>Proof.</strong> Under monotonicity, every unit with {% raw %}<span class="math inline">\(M(1)\leq m_k\)</span>{% endraw %} also has {% raw %}<span class="math inline">\(M(0)\leq m_k\)</span>{% endraw %}, proving the necessary cumulative inequalities. Moreover,</p>
<p>{% raw %}<span class="math display">\[
c_k=\sum_{l&lt;k,\,j\geq k}\vartheta_{lj}.
\]</span>{% endraw %}</p>
<p>All entrants into state {% raw %}<span class="math inline">\(k\)</span>{% endraw %} belong to this crossing mass. Thus {% raw %}<span class="math inline">\(\vartheta_{kk}=p_{1k}-\sum_{l&lt;k}\vartheta_{lk}\geq p_{1k}-c_k\)</span>{% endraw %}, and nonnegativity gives the lower bound.</p>
<p>To prove feasibility and joint attainment, fill destination columns {% raw %}<span class="math inline">\(k=0,\ldots,K-1\)</span>{% endraw %} in order. Before filling column {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, keep the unused supplies from origin rows {% raw %}<span class="math inline">\(0,\ldots,k-1\)</span>{% endraw %} in a pool, retaining each supply's origin label. Its total is {% raw %}<span class="math inline">\(c_k\)</span>{% endraw %}: these rows supplied {% raw %}<span class="math inline">\(F_0(k-1)\)</span>{% endraw %} and the previous columns consumed {% raw %}<span class="math inline">\(F_1(k-1)\)</span>{% endraw %}. Allocate {% raw %}<span class="math inline">\(\min(c_k,p_{1k})\)</span>{% endraw %} from the pool to column {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, and supply the deficit {% raw %}<span class="math inline">\((p_{1k}-c_k)_+\)</span>{% endraw %} from row {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. This is feasible because</p>
<p>{% raw %}<span class="math display">\[
p_{0k}+c_k-p_{1k}=F_0(k)-F_1(k)\geq0.
\]</span>{% endraw %}</p>
<p>Add the unused supply of row {% raw %}<span class="math inline">\(k\)</span>{% endraw %} to the pool. The new total is {% raw %}<span class="math inline">\(c_k+p_{0k}-p_{1k}=c_{k+1}\)</span>{% endraw %}. This proves the induction, starting with {% raw %}<span class="math inline">\(c_0=0\)</span>{% endraw %}. After the last column, {% raw %}<span class="math inline">\(c_K=F_0(K-1)-F_1(K-1)=0\)</span>{% endraw %}, so all row supplies have been used. Every allocation has origin at most its destination, preserves both margins, and assigns exactly {% raw %}<span class="math inline">\((p_{1k}-c_k)_+\)</span>{% endraw %} to diagonal cell {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. The survival-function expression follows from {% raw %}<span class="math inline">\(P(M\geq m_k\mid D=d)=1-F_d(k-1)\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>Combining this proposition with the sharpness theorem in the companion post, full mediation is compatible with the observed distributions under ordered monotonicity if and only if the cumulative inequalities hold and {% raw %}<span class="math inline">\(t_k^{\min}\leq O_k\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. Additional restrictions on {% raw %}<span class="math inline">\(R\)</span>{% endraw %} can invalidate the simultaneous-minimizer construction; in that case the original joint feasibility problem must be used.</p>
<p>The distinction matters even when each coordinate minimum is zero. For example, let {% raw %}<span class="math inline">\(K=3\)</span>{% endraw %}, let both mediator margins be uniform, and impose {% raw %}<span class="math inline">\(\sum_k\vartheta_{kk}\geq1/3\)</span>{% endraw %}. A matrix placing mass {% raw %}<span class="math inline">\(1/3\)</span>{% endraw %} on one fixed state and on each direction of a swap between the other two states is feasible. Choosing different fixed states shows that every coordinate minimum is zero. If all {% raw %}<span class="math inline">\(O_k=0\)</span>{% endraw %}, however, the null requires every diagonal entry to vanish, contradicting the restriction on their sum. The candidate matrices cannot be combined coordinate by coordinate.</p>
<h3 data-note-section="7" id="23-0-what-coarsening-changes">7. Discretization and within-bin movements</h3>
<p>Let {% raw %}<span class="math inline">\(\{B_j\}_{j=1}^J\)</span>{% endraw %} be a fixed measurable partition of the outcome space. After replacing {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} by its cell label, the discrepancy becomes</p>
<p>{% raw %}<span class="math display">\[
b_k^{\mathrm{disc}}=\sum_{j=1}^J\{\mu_{1k}(B_j)-\mu_{0k}(B_j)\}_+\leq b_k.
\]</span>{% endraw %}</p>
<p>Indeed, the maximizing discretized set corresponds to a union of the original cells and is among the Borel sets allowed in {% raw %}<span class="math inline">\(b_k\)</span>{% endraw %}. Equivalently, merging two cells replaces {% raw %}<span class="math inline">\(u_++v_+\)</span>{% endraw %} by {% raw %}<span class="math inline">\((u+v)_+\leq u_++v_+\)</span>{% endraw %}. Outcome coarsening therefore preserves necessary null restrictions but can remove identifying information. The three-outcome example above illustrates cancellation when positive and negative cells are merged. Sampling power also depends on estimation error, so stronger population restrictions do not by themselves imply higher finite-sample power.</p>
<p>Coarsening the mediator changes the principal strata. Let {% raw %}<span class="math inline">\(b(M)\)</span>{% endraw %} be a bin label and {% raw %}<span class="math inline">\(\widetilde S_{kk}=\{b(M(0))=b(M(1))=k\}\)</span>{% endraw %}. A member of this group can have {% raw %}<span class="math inline">\(M(0)\ne M(1)\)</span>{% endraw %}. Under full mediation,</p>
<p>{% raw %}<span class="math display">\[
Y_1-Y_0=Y(0,M(1))-Y(0,M(0)),
\]</span>{% endraw %}</p>
<p>which need not vanish on {% raw %}<span class="math inline">\(\widetilde S_{kk}\)</span>{% endraw %}. Equality of {% raw %}<span class="math inline">\(Y(d,m)\)</span>{% endraw %} across all mediator values in a bin is sufficient to remove this problem.</p>
<p>A weaker sensitivity analysis can instead impose, for each bin with positive stayer probability,</p>
<p>{% raw %}<span class="math display">\[
P\{Y(0,M(1))\ne Y(0,M(0))\mid\widetilde S_{kk}\}\leq\varepsilon_k.
\]</span>{% endraw %}</p>
<p>This assumption concerns the realized pair of potential mediator values. Under {% raw %}<span class="math inline">\(H_0\)</span>{% endraw %}, it implies that the affected mass among bin-stayers is at most {% raw %}<span class="math inline">\(\varepsilon_k\widetilde\theta_{kk}\)</span>{% endraw %}. Applying Proposition 1 to the binned mediator gives the necessary restrictions</p>
<p>{% raw %}<span class="math display">\[
(\widetilde\vartheta_{kk}-\widetilde O_k)_+
\leq\varepsilon_k\widetilde\vartheta_{kk}
\quad\text{for every }k
\]</span>{% endraw %}</p>
<p>for one feasible matrix of bin-stratum shares. A bound stated only for each fixed pair {% raw %}<span class="math inline">\((m,m&#39;)\)</span>{% endraw %} does not automatically supply this bound for the endogenous pair {% raw %}<span class="math inline">\((M(0),M(1))\)</span>{% endraw %}. The within-bin assumption and any movement restrictions must be justified for the binned mediator being analyzed.</p>
<p>The <a href="{% post_url 2024-07-18-sharp-mechanism-bounds-average-effects-and-inference %}">next post</a> constructs a joint potential-outcome law attaining the affected-mass bounds and derives the corresponding inference procedures.</p>
<h3 id="refs">Reference</h3>
<div id="ref-kwon_testing_2024" class="csl-entry" role="listitem">
Kwon, Soonwoo, and Jonathan Roth. <em>Testing Mechanisms.</em> First posted 2024; arXiv:2404.11739v3, revised February 20, 2026. <a href="https://arxiv.org/html/2404.11739v3">Full text</a>. The experimental identification results are in Section 3, with proofs in Appendix A and the minimum-share result in Appendix B.3.
</div>
<nav class="note-series" aria-label="Notes in this series">
<p>
Next: <a href="{% post_url 2024-07-18-sharp-mechanism-bounds-average-effects-and-inference %}">Sharp Mechanism Bounds, Average Effects, and Inference</a>
</p>
</nav>

</div>
