---
layout: "post"
title: "Sharp Mechanism Bounds, Average Effects, and Inference"
date: "2024-07-18"
tags: ["econometrics", "causal inference"]
excerpt: "Joint potential-outcome constructions attain the affected-mass and average-effect bounds; projecting a confidence region gives coverage of the identified effect set."
note_series: "Testing mechanisms"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Testing Mechanisms/stats.tex"
redirect_from: ["/2025/10/28/sharp-mechanism-bounds-average-effects-and-inference/", "/2025/10/28/sharpness-of-principal-stratum-bounds/", "/2025/11/26/bounds-on-average-effects-within-principal-strata/", "/2025/12/25/inference-for-mechanism-bounds/"]
---

<div class="note-content" markdown="0">


<p>The observable inequalities in the <a href="{% post_url 2024-07-13-testing-mediation-principal-strata-and-observable-bounds %}">preceding post</a> bound the probability mass of stayers whose outcomes change under treatment. Sharpness requires a joint distribution of potential outcomes and mediators that attains the bounds while reproducing the entire observed law. The construction also permits sharp bounds on average direct effects. Inference follows by projecting a confidence region for the observed cell probabilities onto the feasible potential-outcome laws.</p>
<p>The identification results follow <span class="citation" data-cites="kwon_testing_2024">Kwon and Roth (<a href="#ref-kwon_testing_2024" role="doc-biblioref">2024</a>)</span> (Section 3 and Appendix B.1), using <a href="https://arxiv.org/html/2404.11739v3">arXiv version 3</a>. The finite-sample confidence-region procedure developed below supplements the paper’s moment-inequality methods.</p>
<h3 data-note-section="1" id="23-59-unequal-cell-masses-and-the-overlap-formula">1. Setup and overlap measures</h3>
<p>Maintain consistency, independent treatment assignment with {% raw %}<span class="math inline">\(0&lt;P(D=1)&lt;1\)</span>{% endraw %}, and the restriction {% raw %}<span class="math inline">\(\theta\in R\)</span>{% endraw %} from Assumptions A1–A3 of the preceding post. The mediator has finite support {% raw %}<span class="math inline">\(\{m_0,\ldots,m_{K-1}\}\)</span>{% endraw %} and outcomes are real-valued. Write</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\mu_{dk}(A)&amp;=P(Y\in A,M=m_k\mid D=d),&amp;p_{dk}&amp;=\mu_{dk}(\mathbb R),\\
S_{lk}&amp;=\{M(0)=m_l,M(1)=m_k\},&amp;\theta_{lk}&amp;=P(S_{lk}).
\end{aligned}
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\Theta_I\)</span>{% endraw %} be the nonempty set of matrices in {% raw %}<span class="math inline">\(R\)</span>{% endraw %} with row margins {% raw %}<span class="math inline">\(p_{0l}\)</span>{% endraw %} and column margins {% raw %}<span class="math inline">\(p_{1k}\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} for the true shares and {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %} for a feasible matrix. Define</p>
{% raw %}<div class="math display">\[
\lambda=\sum_{d,k}\mu_{dk},\qquad
f_{dk}=\frac{d\mu_{dk}}{d\lambda},\qquad
H_k(A)=\int_A\min(f_{0k},f_{1k})\,d\lambda,\qquad
O_k=H_k(\mathbb R).
\]</div>{% endraw %}
<p>The Radon–Nikodym theorem applies because {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %} is finite and dominates all the cell measures. This construction includes atoms and zero-probability cells. The overlap identity established in the preceding post is</p>
{% raw %}<div class="math display">\[
b_k:=\sup_A\{\mu_{1k}(A)-\mu_{0k}(A)\}=p_{1k}-O_k.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(Y_d=Y(d,M(d))\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(r_k=P(S_{kk},Y_1\ne Y_0)\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(r_k\geq(\theta_{kk}-O_k)_+\)</span>{% endraw %}. The conditional fraction {% raw %}<span class="math inline">\(\nu_k=r_k/\theta_{kk}\)</span>{% endraw %} is used only when {% raw %}<span class="math inline">\(\theta_{kk}&gt;0\)</span>{% endraw %}.</p>
<h3 data-note-section="2" id="23-59-the-sharpness-result">2. Joint sharpness</h3>
<p><span id="23-59-couple-the-common-part-first"></span></p>
<div id="mechanism-sharpness" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. <strong>Sharp affected-mass bounds.</strong> For every {% raw %}<span class="math inline">\(\vartheta\in\Theta_I\)</span>{% endraw %}, there exists a joint law of all potential variables and treatment satisfying A1–A3, matching the observed law of {% raw %}<span class="math inline">\((Y,M,D)\)</span>{% endraw %}, and having stratum shares {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %}, such that</p>
{% raw %}<div class="math display">\[
r_k=(\vartheta_{kk}-O_k)_+\qquad\text{for every }k.
\]</div>{% endraw %}
<p>The law can be chosen so that treatment has no direct effect at any mediator value for movers, and no direct effect at other mediator values for members of {% raw %}<span class="math inline">\(S_{kk}\)</span>{% endraw %}. Consequently, the observed law is compatible with full mediation if and only if</p>
{% raw %}<div class="math display">\[
\text{there exists }\vartheta\in\Theta_I
\text{ such that }\vartheta_{kk}\leq O_k\text{ for all }k.
\]</div>{% endraw %}
</div>
<p>For fixed {% raw %}<span class="math inline">\(t=\vartheta_{kk}\)</span>{% endraw %}, at most {% raw %}<span class="math inline">\(O_k\)</span>{% endraw %} units can receive the same outcome in both cells, because their common outcome measure must be dominated by both {% raw %}<span class="math inline">\(\mu_{0k}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mu_{1k}\)</span>{% endraw %}. Assign the smaller mass {% raw %}<span class="math inline">\(\min(t,O_k)\)</span>{% endraw %} to equal outcome pairs. If {% raw %}<span class="math inline">\(t&gt;O_k\)</span>{% endraw %}, use the full overlap {% raw %}<span class="math inline">\(H_k\)</span>{% endraw %} and select residual submeasures {% raw %}<span class="math inline">\(U_{dk}\leq\mu_{dk}-H_k\)</span>{% endraw %} of mass {% raw %}<span class="math inline">\(t-O_k\)</span>{% endraw %}. The stayer law is then</p>
{% raw %}<div class="math display">\[
\Gamma_{kk}=\operatorname{diag}(H_k)
+\frac{U_{0k}\otimes U_{1k}}{t-O_k}.
\]</div>{% endraw %}
<p>The two residual measures are mutually singular, so their product assigns zero mass to equal pairs. Exactly {% raw %}<span class="math inline">\(t-O_k\)</span>{% endraw %} stayers change outcome. When {% raw %}<span class="math inline">\(t\leq O_k\)</span>{% endraw %}, a scaled submeasure of {% raw %}<span class="math inline">\(H_k\)</span>{% endraw %} placed on the diagonal suffices.</p>
<p>To allocate the remaining outcomes, let {% raw %}<span class="math inline">\(L_l\)</span>{% endraw %} be the unused control measure in origin cell {% raw %}<span class="math inline">\(l\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V_k\)</span>{% endraw %} the unused treated measure in destination cell {% raw %}<span class="math inline">\(k\)</span>{% endraw %}. Their masses are {% raw %}<span class="math inline">\(p_{0l}-\vartheta_{ll}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(p_{1k}-\vartheta_{kk}\)</span>{% endraw %}. For each positive off-diagonal share, assign</p>
{% raw %}<div class="math display">\[
\Gamma_{lk}=\vartheta_{lk}
\frac{L_l}{p_{0l}-\vartheta_{ll}}
\otimes\frac{V_k}{p_{1k}-\vartheta_{kk}},\qquad l\ne k.
\]</div>{% endraw %}
<p>The row and column sums of {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %} make these marginals add back to the unused measures. The <a href="#23-59-appendix-joint-law">appendix</a> verifies the zero-mass cases and completes all potential outcomes under one law.</p>
<h3 data-note-section="3" id="23-59-fractions-affected-and-average-effects-answer-different-questions">3. Unknown shares and pooled affected fractions</h3>
<p>For each {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, the sharp lower bound on the unconditional affected mass is</p>
{% raw %}<div class="math display">\[
\underline r_k
=\min_{\vartheta\in\Theta_I}(\vartheta_{kk}-O_k)_+
=(t_k^{\min}-O_k)_+,
\qquad t_k^{\min}=\min_{\vartheta\in\Theta_I}\vartheta_{kk}.
\]</div>{% endraw %}
<p>The function is increasing and continuous in the diagonal share, and compactness gives a minimizing matrix. Theorem 1 then gives attainment. Coordinate bounds can be attained by different matrices; simultaneous attainment across coordinates requires an additional argument, such as Proposition 3 of the preceding post under ordered monotonicity alone.</p>
<p>If {% raw %}<span class="math inline">\(t_k^{\min}&gt;0\)</span>{% endraw %}, the sharp lower bound on the conditional fraction is</p>
{% raw %}<div class="math display">\[
\underline\nu_k
=\min_{\vartheta\in\Theta_I}\left(1-\frac{O_k}{\vartheta_{kk}}\right)_+
=\left(1-\frac{O_k}{t_k^{\min}}\right)_+.
\]</div>{% endraw %}
<p>This follows because {% raw %}<span class="math inline">\(t\mapsto(1-O_k/t)_+\)</span>{% endraw %} is nondecreasing for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(t_k^{\min}=0\)</span>{% endraw %}, a feasible model has no {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-stayers. The unconditional bound is then zero, but the conditional fraction is undefined in that model. Among models with positive stayer mass, its lower bound is instead</p>
{% raw %}<div class="math display">\[
\inf_{\vartheta\in\Theta_I:\,\vartheta_{kk}&gt;0}
\left(1-\frac{O_k}{\vartheta_{kk}}\right)_+,
\]</div>{% endraw %}
<p>provided this set is nonempty. For example, when {% raw %}<span class="math inline">\(O_k=0\)</span>{% endraw %}, every such model has {% raw %}<span class="math inline">\(\nu_k=1\)</span>{% endraw %}, even if models with zero stayer mass are also feasible.</p>
<p>For pooling across states, put {% raw %}<span class="math inline">\(T(\vartheta)=\sum_k\vartheta_{kk}\)</span>{% endraw %}. The total affected mass in the population and the fraction affected among all stayers have sharp lower bounds</p>
{% raw %}<div class="math display">\[
\underline r_{\mathrm{all}}
=\min_{\vartheta\in\Theta_I}\sum_k(\vartheta_{kk}-O_k)_+,
\qquad
\underline\nu_{\mathrm{all}}
=\inf_{\vartheta\in\Theta_I:\,T(\vartheta)&gt;0}
\frac{\sum_k(\vartheta_{kk}-O_k)_+}{T(\vartheta)}.
\]</div>{% endraw %}
<p>For each fixed matrix the lower masses are jointly attainable by Theorem 1, which proves sharpness of both optimizations. The second estimand is defined only for a positive total stayer share. If every feasible matrix has {% raw %}<span class="math inline">\(T=0\)</span>{% endraw %}, there is no conditional pooled estimand.</p>
<p>When {% raw %}<span class="math inline">\(R=\{\vartheta\in\Delta_{K^2-1}:B\operatorname{vec}(\vartheta)\leq b\}\)</span>{% endraw %}, the first problem is a linear program after introducing variables {% raw %}<span class="math inline">\(u_k\)</span>{% endraw %} satisfying</p>
{% raw %}<div class="math display">\[
0\leq u_k\leq\vartheta_{kk},\qquad
u_k\geq\vartheta_{kk}-O_k,
\]</div>{% endraw %}
<p>and minimizing {% raw %}<span class="math inline">\(\sum_k u_k\)</span>{% endraw %}. At the minimum for a fixed matrix, {% raw %}<span class="math inline">\(u_k=(\vartheta_{kk}-O_k)_+\)</span>{% endraw %}.</p>
<p>For the pooled conditional fraction, the linear-fractional transformation can be written explicitly. Set {% raw %}<span class="math inline">\(\tau=1/T(\vartheta)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(z=\tau\vartheta\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(v_k=\tau u_k\)</span>{% endraw %}. The equivalent program is</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\inf\quad &amp;\sum_k v_k\\
\text{subject to}\quad
&amp;z_{lk}\geq0,\quad \tau\geq0,\quad B\operatorname{vec}(z)\leq\tau b,\\
&amp;\sum_k z_{lk}=\tau p_{0l},\quad
  \sum_l z_{lk}=\tau p_{1k},\quad \sum_k z_{kk}=1,\\
&amp;0\leq v_k\leq z_{kk},\quad v_k\geq z_{kk}-\tau O_k.
\end{aligned}
\]</div>{% endraw %}
<p>The margin equations give {% raw %}<span class="math inline">\(\sum_{l,k}z_{lk}=\tau\)</span>{% endraw %}. Since the diagonal sum is one, every feasible point has {% raw %}<span class="math inline">\(\tau\geq1\)</span>{% endraw %}, so division by {% raw %}<span class="math inline">\(\tau\)</span>{% endraw %} is valid. Conversely, any feasible point yields {% raw %}<span class="math inline">\(\vartheta=z/\tau\in\Theta_I\)</span>{% endraw %} with {% raw %}<span class="math inline">\(T(\vartheta)=1/\tau&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(u=v/\tau\)</span>{% endraw %}. Both transformations preserve the objective. Thus the two programs have the same infimum even if feasible total stayer shares approach zero.</p>
<h3 data-note-section="4" id="23-59-average-direct-effects-use-trimming">4. Sharp bounds on average direct effects</h3>
<p>Fix a state {% raw %}<span class="math inline">\(k\)</span>{% endraw %} with positive stayer share {% raw %}<span class="math inline">\(t=\vartheta_{kk}\)</span>{% endraw %}. Assume</p>
{% raw %}<div class="math display">\[
\int |y|\,\mu_{dk}(dy)&lt;\infty,\qquad d=0,1.
\]</div>{% endraw %}
<p>The average direct effect among its stayers is</p>
{% raw %}<div class="math display">\[
ADE_k=\mathbb{E}[Y(1,m_k)-Y(0,m_k)\mid S_{kk}].
\]</div>{% endraw %}
<p>This is a direct effect because the mediator is the same under both treatments in this stratum. Define the cell distribution {% raw %}<span class="math inline">\(F_{dk}(y)=\mu_{dk}(( -\infty,y])/p_{dk}\)</span>{% endraw %} and its generalized quantile {% raw %}<span class="math inline">\(Q_{dk}(u)=\inf\{y:F_{dk}(y)\geq u\}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(0&lt;u&lt;1\)</span>{% endraw %}. Positivity of {% raw %}<span class="math inline">\(t\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(p_{0k},p_{1k}&gt;0\)</span>{% endraw %}.</p>
<p><span id="23-59-deriving-trimmed-means-by-an-exchange-argument"></span> <span id="23-59-making-the-trimming-argument-valid-for-continuous-distributions"></span></p>
<div id="mechanism-trimmed-means" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2</strong>. <strong>Trimmed means with atoms.</strong> Let {% raw %}<span class="math inline">\(F\)</span>{% endraw %} be a probability distribution on {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %} with finite absolute first moment, and let {% raw %}<span class="math inline">\(a\in(0,1]\)</span>{% endraw %}. Among measurable selection rules {% raw %}<span class="math inline">\(s:\mathbb R\to[0,1]\)</span>{% endraw %} satisfying {% raw %}<span class="math inline">\(\int s\,dF=a\)</span>{% endraw %}, the smallest and largest selected means are</p>
{% raw %}<div class="math display">\[
L_F(a)=\frac1a\int_0^a Q_F(u)\,du,
\qquad
U_F(a)=\frac1a\int_{1-a}^1 Q_F(u)\,du.
\]</div>{% endraw %}
<p>Both endpoints are attained. Moreover, {% raw %}<span class="math inline">\(L_F\)</span>{% endraw %} is nondecreasing and {% raw %}<span class="math inline">\(U_F\)</span>{% endraw %} is nonincreasing in {% raw %}<span class="math inline">\(a\)</span>{% endraw %}.</p>
</div>
<p>For the lower endpoint with {% raw %}<span class="math inline">\(0&lt;a&lt;1\)</span>{% endraw %}, choose a threshold {% raw %}<span class="math inline">\(q=Q_F(a)\)</span>{% endraw %}, select all outcomes below it, and select enough of any atom at {% raw %}<span class="math inline">\(q\)</span>{% endraw %} to obtain mass {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(s_*\)</span>{% endraw %} be this rule. Every other rule {% raw %}<span class="math inline">\(s\)</span>{% endraw %} with the same mass satisfies</p>
{% raw %}<div class="math display">\[
\int y(s-s_*)\,dF
=\int(y-q)(s-s_*)\,dF\geq0.
\]</div>{% endraw %}
<p>Below {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, both factors in the integrand are nonpositive; above {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, both are nonnegative. The selected outcome total is {% raw %}<span class="math inline">\(\int_0^aQ_F(u)\,du\)</span>{% endraw %}. The upper-tail rule gives the other endpoint. The <a href="#23-59-appendix-trimming">appendix</a> supplies the fractional-atom construction, the case {% raw %}<span class="math inline">\(a=1\)</span>{% endraw %}, and monotonicity in the selected share.</p>
<div id="mechanism-average-effect" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>. <strong>Average direct-effect bounds.</strong> For a fixed feasible {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %} with {% raw %}<span class="math inline">\(t=\vartheta_{kk}&gt;0\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(a_d=t/p_{dk}\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[
L_{F_{1k}}(a_1)-U_{F_{0k}}(a_0)
\leq ADE_k\leq
U_{F_{1k}}(a_1)-L_{F_{0k}}(a_0).
\]</div>{% endraw %}
<p>The endpoints are attainable while preserving all observed distributions and the chosen matrix. If {% raw %}<span class="math inline">\(t_k^{\min}&gt;0\)</span>{% endraw %}, the sharp bounds with unknown shares result from setting {% raw %}<span class="math inline">\(t=t_k^{\min}\)</span>{% endraw %} in both endpoints.</p>
</div>
<div class="proof">
<p><strong>Proof.</strong> In arm {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, the stayer outcome submeasure {% raw %}<span class="math inline">\(T_{dk}\)</span>{% endraw %} is dominated by {% raw %}<span class="math inline">\(\mu_{dk}\)</span>{% endraw %} and has mass {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Its Radon–Nikodym derivative with respect to {% raw %}<span class="math inline">\(\mu_{dk}\)</span>{% endraw %} is a selection rule {% raw %}<span class="math inline">\(s_d\in[0,1]\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\int s_d\,dF_{dk}=a_d\)</span>{% endraw %}. Lemma 2 bounds its conditional mean. Subtracting the largest control mean from the smallest treated mean gives the lower endpoint; reversing the choices gives the upper endpoint.</p>
<p>For attainment, choose the two extremal submeasures from Lemma 2 and couple them within {% raw %}<span class="math inline">\(S_{kk}\)</span>{% endraw %}, for example with their product divided by {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. For each other diagonal stratum, choose any dominated submeasures of the required equal mass and couple them. The mover allocation in the proof of Theorem 1 then distributes the residual measures according to {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %}. Completion of potential outcomes and independent assignment reproduce the observed law. The mean difference depends only on these two marginals.</p>
<p>By Lemma 2 the lower endpoint is nondecreasing in {% raw %}<span class="math inline">\(t\)</span>{% endraw %} and the upper endpoint is nonincreasing. A matrix attaining the positive minimum diagonal share therefore attains each extremal endpoint over {% raw %}<span class="math inline">\(\Theta_I\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<p>When zero stayer shares are feasible, optimize these endpoints over matrices with {% raw %}<span class="math inline">\(\vartheta_{kk}&gt;0\)</span>{% endraw %}. An infimum or supremum may be approached without attainment, and unbounded outcome support can give infinite bounds.</p>
<p>These are bounds on mean effects under A1–A3, without imposing full mediation or requiring the affected-mass lower bound to be attained. A construction minimizing the number affected need not also minimize or maximize their mean effect. In particular, {% raw %}<span class="math inline">\(ADE_k=0\)</span>{% endraw %} allows offsetting positive and negative effects and is weaker than absence of individual effects.</p>
<h3 data-note-section="5" id="23-59-constructing-the-coupling">5. A discrete construction and a trimming example</h3>
<p>At outcomes {% raw %}<span class="math inline">\(0,1,2\)</span>{% endraw %}, take</p>
{% raw %}<div class="math display">\[
\mu_{1k}=(0.18,0.04,0.18),\qquad
\mu_{0k}=(0.10,0.20,0.10),\qquad t=0.30.
\]</div>{% endraw %}
<p>Their overlap is {% raw %}<span class="math inline">\((0.10,0.04,0.10)\)</span>{% endraw %}, with mass {% raw %}<span class="math inline">\(O_k=0.24\)</span>{% endraw %}. Assign this mass to unchanged stayers. The residual treated and control measures are {% raw %}<span class="math inline">\((0.08,0,0.08)\)</span>{% endraw %} and {% raw %}<span class="math inline">\((0,0.16,0)\)</span>{% endraw %}. Assign {% raw %}<span class="math inline">\(0.06\)</span>{% endraw %} to the pair {% raw %}<span class="math inline">\((Y_0,Y_1)=(1,0)\)</span>{% endraw %}. There are then {% raw %}<span class="math inline">\(0.30\)</span>{% endraw %} stayers, of whom {% raw %}<span class="math inline">\(0.06\)</span>{% endraw %} change outcome, attaining the bound {% raw %}<span class="math inline">\(\nu_k\geq0.20\)</span>{% endraw %}. The remaining treated mass {% raw %}<span class="math inline">\((0.02,0,0.08)\)</span>{% endraw %} and control mass {% raw %}<span class="math inline">\((0,0.10,0)\)</span>{% endraw %} each total {% raw %}<span class="math inline">\(0.10\)</span>{% endraw %} and can be allocated to entrants and leavers. Assigning the changed mass to {% raw %}<span class="math inline">\((1,2)\)</span>{% endraw %} instead reverses its effect’s sign while attaining the same affected fraction.</p>
<p>For the separate mean-effect bounds, stayers occupy {% raw %}<span class="math inline">\(0.30/0.40=3/4\)</span>{% endraw %} of each cell. The minimum treated stayer outcome total is {% raw %}<span class="math inline">\(0.18\cdot0+0.04\cdot1+0.08\cdot2=0.20\)</span>{% endraw %}; the maximum is {% raw %}<span class="math inline">\(0.08\cdot0+0.04\cdot1+0.18\cdot2=0.40\)</span>{% endraw %}. Dividing by {% raw %}<span class="math inline">\(0.30\)</span>{% endraw %} gives means {% raw %}<span class="math inline">\(2/3\)</span>{% endraw %} and {% raw %}<span class="math inline">\(4/3\)</span>{% endraw %}. The control endpoints are the same, so Proposition 3 yields {% raw %}<span class="math inline">\(ADE_k\in[-2/3,2/3]\)</span>{% endraw %}.</p>
<p>Fractional selection at atoms is essential. If a cell has probability {% raw %}<span class="math inline">\(0.7\)</span>{% endraw %} at zero and {% raw %}<span class="math inline">\(0.3\)</span>{% endraw %} at ten, and stayers make up half the cell, their maximum mean is</p>
{% raw %}<div class="math display">\[
\frac{0.3\cdot10+0.2\cdot0}{0.5}=6.
\]</div>{% endraw %}
<p>This allocation selects all the mass at ten and only part of the mass at zero. The minimum mean is zero. Selecting entire outcome atoms would exclude both valid fractional allocations.</p>
<p><span id="mechanism-linear-null"></span></p>
<h3 data-note-section="6" id="23-59-implementing-the-test">6. Population restrictions as a linear system</h3>
<p>For inference, first suppose that {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} has a known finite support {% raw %}<span class="math inline">\(\{y_1,\ldots,y_J\}\)</span>{% endraw %}. Let</p>
{% raw %}<div class="math display">\[
q_{dkj}=P(Y=y_j,M=m_k\mid D=d),\qquad p_{dk}=\sum_jq_{dkj},
\]</div>{% endraw %}
<p>and suppose {% raw %}<span class="math inline">\(R\)</span>{% endraw %} is given by {% raw %}<span class="math inline">\(B\operatorname{vec}(\vartheta)\leq b\)</span>{% endraw %} within the simplex. These restrictions are specified before testing. Define {% raw %}<span class="math inline">\(\mathcal Q_0\)</span>{% endraw %} as the set of probability vectors {% raw %}<span class="math inline">\(q\)</span>{% endraw %} for which there exist {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %} and slack variables {% raw %}<span class="math inline">\(s_{kj}\)</span>{% endraw %} satisfying</p>
{% raw %}<div class="math display">\[
\begin{aligned}
&amp;q_{dkj}\geq0,\qquad \sum_{k,j}q_{dkj}=1 &amp;&amp;(d=0,1),\\
&amp;\vartheta_{lk}\geq0,\qquad B\operatorname{vec}(\vartheta)\leq b,\\
&amp;\sum_k\vartheta_{lk}=\sum_jq_{0lj} &amp;&amp;(0\leq l&lt;K),\\
&amp;\sum_l\vartheta_{lk}=\sum_jq_{1kj} &amp;&amp;(0\leq k&lt;K),\\
&amp;s_{kj}\geq0,\qquad s_{kj}\geq q_{1kj}-q_{0kj} &amp;&amp;(k,j),\\
&amp;\sum_j s_{kj}\leq p_{1k}-\vartheta_{kk} &amp;&amp;(0\leq k&lt;K).
\end{aligned}
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, every admissible slack is at least {% raw %}<span class="math inline">\((q_{1kj}-q_{0kj})_+\)</span>{% endraw %}. Conversely, these positive parts themselves are admissible if their sum is no larger than the entrant mass. Thus the slack representation is equivalent to the full set of outcome-subset restrictions. Theorem 1 establishes that {% raw %}<span class="math inline">\(q\in\mathcal Q_0\)</span>{% endraw %} is both necessary and sufficient for compatibility with full mediation under the maintained restrictions. This is the formulation in <a href="https://arxiv.org/html/2404.11739v3#S4">Kwon and Roth, Section 4, equations (9)–(12)</a>.</p>
<p>To test the weaker joint hypothesis {% raw %}<span class="math inline">\(\nu_k\leq\bar\nu_k\)</span>{% endraw %} for specified {% raw %}<span class="math inline">\(0\leq\bar\nu_k\leq1\)</span>{% endraw %}, replace the last line by</p>
{% raw %}<div class="math display">\[
\sum_j s_{kj}\leq p_{1k}-(1-\bar\nu_k)\vartheta_{kk}.
\]</div>{% endraw %}
<p>For positive stayer shares this is equivalent to {% raw %}<span class="math inline">\((\vartheta_{kk}-O_k)_+\leq\bar\nu_k\vartheta_{kk}\)</span>{% endraw %}; at zero shares the affected-mass restriction is vacuous. The simultaneous construction in Theorem 1 proves sufficiency for these upper-bound hypotheses as well.</p>
<p><span id="mechanism-moment-inference"></span></p>
<h3 data-note-section="7" id="23-59-sampling-uncertainty-and-moment-inequality-inference">7. Sampling uncertainty and moment-inequality inference</h3>
<p>Assume now that {% raw %}<span class="math inline">\((Y_i,M_i,D_i)_{i=1}^n\)</span>{% endraw %} are iid draws from the experimental population, with independent Bernoulli assignment of probability {% raw %}<span class="math inline">\(e\in(0,1)\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(\pi_1=e\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\pi_0=1-e\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(n_d=\sum_i\mathbf1_{\{D_i=d\}}\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(n_d&gt;0\)</span>{% endraw %}, estimate</p>
{% raw %}<div class="math display">\[
\widehat q_{dkj}
=\frac1{n_d}\sum_{i:D_i=d}\mathbf1_{\{Y_i=y_j,M_i=m_k\}}.
\]</div>{% endraw %}
<p>The support dimensions are fixed in the following limit calculation. Let {% raw %}<span class="math inline">\(q_d\)</span>{% endraw %} collect the {% raw %}<span class="math inline">\(KJ\)</span>{% endraw %} cell probabilities and {% raw %}<span class="math inline">\(Z_i\)</span>{% endraw %} their vector of cell indicators. Then</p>
{% raw %}<div class="math display">\[
\sqrt n(\widehat q_d-q_d)
=\frac1{\sqrt n}\sum_{i=1}^n
\frac{\mathbf1_{\{D_i=d\}}}{\pi_d}(Z_i-q_d)+o_p(1).
\]</div>{% endraw %}
<p>Indeed, the exact identity replaces {% raw %}<span class="math inline">\(1/\pi_d\)</span>{% endraw %} on the right by {% raw %}<span class="math inline">\(n/n_d\)</span>{% endraw %}; the law of large numbers gives {% raw %}<span class="math inline">\(n_d/n\xrightarrow{P}\pi_d\)</span>{% endraw %}, and the centered sum is {% raw %}<span class="math inline">\(O_p(1)\)</span>{% endraw %} by its finite variance. The event of an empty arm has probability tending to zero. The <a href="{% post_url 2022-03-25-central-limit-theorems-and-worked-examples %}">iid multivariate central limit theorem</a> and Slutsky’s theorem yield</p>
{% raw %}<div class="math display">\[
\sqrt n(\widehat q-q)\ \Rightarrow\ N(0,\Sigma),\qquad
\Sigma=\operatorname{diag}(\Sigma_0,\Sigma_1),\qquad
\Sigma_d=\frac{\operatorname{diag}(q_d)-q_dq_d&#x27;}{\pi_d}.
\]</div>{% endraw %}
<p>The two influence-function blocks have zero covariance because their products vanish and each block has mean zero. A consistent covariance estimate substitutes {% raw %}<span class="math inline">\(\widehat q_d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n_d/n\)</span>{% endraw %}. The simplex constraints make {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} singular, and zero-probability cells can reduce its rank further.</p>
<p>Collecting {% raw %}<span class="math inline">\(\omega=(\operatorname{vec}(\vartheta)&#x27;,\operatorname{vec}(s)&#x27;)&#x27;\)</span>{% endraw %}, and expressing equalities as paired inequalities, the population null has the form</p>
{% raw %}<div class="math display">\[
H_0^{\mathrm{obs}}:\quad\exists\omega\text{ such that }
C_1\omega-C_2q\geq c,
\]</div>{% endraw %}
<p>for known matrices and a known vector {% raw %}<span class="math inline">\(c\)</span>{% endraw %}. This is the linear-nuisance moment-inequality problem to which the paper applies the methods of <a href="https://pakes.scholars.harvard.edu/publications/inference-linear-conditional-moment-inequalities">Andrews, Roth, and Pakes</a>; <a href="https://arxiv.org/abs/1907.06317">Cox and Shi</a>; and <a href="https://arxiv.org/abs/2009.08568">Fang, Santos, Shaikh, and Torgovitsky</a>. Their critical values account for the inequality constraints and require the respective regularity conditions. Removing one probability coordinate from each treatment arm resolves the simplex singularities when all cell probabilities are positive.</p>
<p>Directly rejecting whenever {% raw %}<span class="math inline">\(\widehat q\notin\mathcal Q_0\)</span>{% endraw %} has no calibration to a significance level. A binding population restriction can be violated by sampling error with nonvanishing probability. Also, the positive-part map is nondifferentiable when a cell difference is zero, and an optimized bound can be nondifferentiable when the active constraints change. Therefore ordinary standard errors or an ordinary bootstrap of the optimized bound require a justification beyond the preceding central limit theorem.</p>
<p>The sampling unit must match the experiment. For clustered data, asymptotic normality and covariance estimation must be based on independent clusters under suitable cluster-level conditions. The individual-level covariance formula above and the finite-sample argument below do not apply to dependent individuals within a cluster.</p>
<p><span id="mechanism-confidence-set-test"></span> <span id="mechanism-test-example"></span></p>
<p><span id="mechanism-finite-sample-test"></span></p>
<h3 data-note-section="8" id="23-59-a-finite-sample-confidence-set-test">8. A finite-sample confidence-set test</h3>
<p>Under the iid Bernoulli-assignment model of Section 7, a conservative test follows from simultaneous confidence intervals for the cell probabilities. Fix {% raw %}<span class="math inline">\(\alpha\in(0,1)\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(L=2KJ\)</span>{% endraw %}. If both arms are nonempty, define</p>
{% raw %}<div class="math display">\[
\epsilon_d=\sqrt{\frac{\log(2L/\alpha)}{2n_d}},
\qquad
\mathcal C_n=\left\{q:
\begin{array}{l}
q_{dkj}\geq0,\quad \sum_{k,j}q_{dkj}=1,\\
|q_{dkj}-\widehat q_{dkj}|\leq\epsilon_d\quad\text{for all }d,k,j
\end{array}
\right\}.
\]</div>{% endraw %}
<p>Reject when {% raw %}<span class="math inline">\(\mathcal C_n\cap\mathcal Q_0=\varnothing\)</span>{% endraw %}. This is one linear feasibility problem in {% raw %}<span class="math inline">\((q,\vartheta,s)\)</span>{% endraw %}. In particular, the mediator margins vary with {% raw %}<span class="math inline">\(q\)</span>{% endraw %} inside the confidence set. Fixing them at empirical values while varying the outcome cells would omit part of the sampling uncertainty. If either arm is empty, define the test not to reject.</p>
<div id="mechanism-finite-sample-size" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p><strong>Proposition 4</strong>. <strong>Uniform finite-sample size bound.</strong> Under the sampling model of Section 7, the preceding test has rejection probability at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for every sample size and every distribution satisfying full mediation and A1–A3. The statement includes zero-probability cells and binding inequalities.</p>
</div>
<p>Conditional on the treatment labels, Hoeffding’s inequality gives</p>
{% raw %}<div class="math display">\[
P\{|\widehat q_{dkj}-q_{dkj}|&gt;\epsilon_d\mid D_1,\ldots,D_n\}
\leq2e^{-2n_d\epsilon_d^2}=\alpha/L.
\]</div>{% endraw %}
<p>A union bound implies {% raw %}<span class="math inline">\(P(q\in\mathcal C_n\mid D_1,\ldots,D_n)\geq1-\alpha\)</span>{% endraw %} for nonempty arms. Under the null, {% raw %}<span class="math inline">\(q\in\mathcal Q_0\)</span>{% endraw %}, so rejecting requires {% raw %}<span class="math inline">\(q\notin\mathcal C_n\)</span>{% endraw %}. Averaging over assignments gives size at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %}. The <a href="#23-59-appendix-finite-sample">appendix</a> derives the exponential inequality and handles empty arms.</p>
<p>The exponential inequality in the proof is the Bernoulli form of Hoeffding’s bound. Dependence among the multinomial cell counts does not affect the union bound. The procedure needs no covariance inverse or differentiability of an optimized bound. Its coordinate intervals can be conservative because they do not use the covariance information available to the paper’s moment-inequality methods.</p>
<p>For a numerical example, order the cells as {% raw %}<span class="math inline">\((m_0,y_1),(m_0,y_2),(m_1,y_1),(m_1,y_2)\)</span>{% endraw %}, assume binary mediator monotonicity, and take</p>
{% raw %}<div class="math display">\[
\widehat q_0=(0.25,0.45,0.15,0.15),\qquad
\widehat q_1=(0.30,0.10,0.30,0.30),\qquad
n_0=n_1=10{,}000.
\]</div>{% endraw %}
<p>At {% raw %}<span class="math inline">\(\alpha=0.05\)</span>{% endraw %}, {% raw %}<span class="math inline">\(L=8\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\epsilon_d=\sqrt{\log(320)/20000}\simeq0.01698\)</span>{% endraw %}. Every {% raw %}<span class="math inline">\(q\in\mathcal C_n\)</span>{% endraw %} satisfies</p>
{% raw %}<div class="math display">\[
q_{1,0,1}-q_{0,0,1}\geq0.05-2\epsilon_d&gt;0.016.
\]</div>{% endraw %}
<p>Monotonicity permits no entrants into state zero, so the null requires this difference to be nonpositive. Thus the intersection is empty and the test rejects. The positive lower bound on this difference certifies infeasibility. In computation, solver failure or an unresolved feasibility tolerance is not a statistical rejection.</p>
<p><span id="mechanism-effect-projection"></span></p>
<h3 data-note-section="9" id="23-59-confidence-sets-for-average-direct-effects">9. Confidence sets for average direct effects</h3>
<p>The same confidence region can be projected onto {% raw %}<span class="math inline">\(ADE_k\)</span>{% endraw %} without imposing full mediation. For {% raw %}<span class="math inline">\(q\in\mathcal C_n\)</span>{% endraw %} and feasible shares {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %}, introduce stayer outcome masses {% raw %}<span class="math inline">\(w_{dj}\)</span>{% endraw %} satisfying</p>
{% raw %}<div class="math display">\[
0\leq w_{dj}\leq q_{dkj},\qquad
\sum_j w_{dj}=\vartheta_{kk}\quad(d=0,1).
\]</div>{% endraw %}
<p>Retain the probability, margin, and {% raw %}<span class="math inline">\(R\)</span>{% endraw %} restrictions, but omit the full-mediation slack inequalities. Include {% raw %}<span class="math inline">\(a\in\mathbb R\)</span>{% endraw %} in {% raw %}<span class="math inline">\(\mathcal A_n\)</span>{% endraw %} if some such variables with {% raw %}<span class="math inline">\(\vartheta_{kk}&gt;0\)</span>{% endraw %} satisfy</p>
{% raw %}<div class="math display">\[
\sum_j y_j(w_{1j}-w_{0j})=a\vartheta_{kk}.
\]</div>{% endraw %}
<p>For fixed {% raw %}<span class="math inline">\(a\)</span>{% endraw %} these are linear constraints except for the strict positivity requirement. Positivity can be checked by maximizing {% raw %}<span class="math inline">\(\vartheta_{kk}\)</span>{% endraw %} subject to the remaining weak constraints and verifying that the maximum is positive. The feasible set for these variables is compact, so a positive supremum is attained.</p>
<div id="mechanism-effect-coverage" class="proposition" data-note-number="5" data-note-kind="Proposition">
<p><strong>Proposition 5</strong>. <strong>Projection coverage.</strong> Let {% raw %}<span class="math inline">\(\mathcal I_k(q)\)</span>{% endraw %} be the set of average direct effects attainable under A1–A3 with observed cell law {% raw %}<span class="math inline">\(q\)</span>{% endraw %} and positive {% raw %}<span class="math inline">\(k\)</span>{% endraw %}-stayer share. Under the iid Bernoulli-assignment model,</p>
{% raw %}<div class="math display">\[
P\{\mathcal I_k(q)\subseteq\mathcal A_n\}\geq1-\alpha.
\]</div>{% endraw %}
<p>In particular, if the true share {% raw %}<span class="math inline">\(\theta_{kk}&gt;0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(P(ADE_k\in\mathcal A_n)\geq1-\alpha\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(\mathcal A_n=\mathbb R\)</span>{% endraw %} when an arm is empty.</p>
</div>
<div class="proof">
<p><strong>Proof.</strong> On {% raw %}<span class="math inline">\(\{q\in\mathcal C_n\}\)</span>{% endraw %}, take any full-data law realizing an effect {% raw %}<span class="math inline">\(a\in\mathcal I_k(q)\)</span>{% endraw %}. Use its stratum shares {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %} and stayer outcome masses</p>
{% raw %}<div class="math display">\[
w_{dj}=P(S_{kk},Y(d,m_k)=y_j).
\]</div>{% endraw %}
<p>Random assignment and consistency imply {% raw %}<span class="math inline">\(0\leq w_{dj}\leq q_{dkj}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sum_jw_{dj}=\vartheta_{kk}&gt;0\)</span>{% endraw %}. Moreover, {% raw %}<span class="math inline">\(\sum_jy_j(w_{1j}-w_{0j})=a\vartheta_{kk}\)</span>{% endraw %}. These variables establish {% raw %}<span class="math inline">\(a\in\mathcal A_n\)</span>{% endraw %}. The same event therefore gives inclusion for every {% raw %}<span class="math inline">\(a\in\mathcal I_k(q)\)</span>{% endraw %} simultaneously. The confidence-region coverage proved above does not require full mediation and is at least {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}.</p>
</div>
<p>The endpoints of the interval hull of {% raw %}<span class="math inline">\(\mathcal A_n\)</span>{% endraw %} are the infimum and supremum of</p>
{% raw %}<div class="math display">\[
\frac{\sum_j y_j(w_{1j}-w_{0j})}{\vartheta_{kk}}
\]</div>{% endraw %}
<p>over the stated feasible set with positive denominator. This is the sample counterpart of the trimming selections. Endpoints need not be attained if feasible shares approach zero; the definition by feasibility retains that distinction.</p>
<p>For a continuous outcome, a prespecified finite partition gives a valid test of full mediation using the cell labels, with the loss of population information described in the preceding post. The finite-sample proof remains applicable to those bounded cell indicators. Bins selected using the same outcomes require a separate calibration argument; bins chosen using an independent training sample can be treated as fixed conditional on that sample. Bounds on the mean of the original outcome require its actual values or additional within-bin information. Replacing outcomes by arbitrary bin labels changes the mean-effect estimand.</p>
<h3 data-note-section="10" id="23-59-appendix-joint-law">10. Appendix: a joint potential-outcome law</h3>
<div class="proof">
<p><strong>Proof.</strong> Fix {% raw %}<span class="math inline">\(\vartheta\)</span>{% endraw %}. We first allocate outcomes to stayers within each mediator state, then allocate all remaining outcomes to movers using this same matrix.</p>
<p><em>Stayer allocations.</em> Fix {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(t=\vartheta_{kk}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(O=O_k\)</span>{% endraw %}, and suppress {% raw %}<span class="math inline">\(k\)</span>{% endraw %} temporarily. Feasibility gives {% raw %}<span class="math inline">\(0\leq t\leq\min(p_0,p_1)\)</span>{% endraw %}. Construct a measure {% raw %}<span class="math inline">\(\Gamma_{kk}\)</span>{% endraw %} on pairs {% raw %}<span class="math inline">\((y_0,y_1)\)</span>{% endraw %} of total mass {% raw %}<span class="math inline">\(t\)</span>{% endraw %}.</p>
<p>If {% raw %}<span class="math inline">\(t\leq O\)</span>{% endraw %} and {% raw %}<span class="math inline">\(O&gt;0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(C=(t/O)H\)</span>{% endraw %} and put all of {% raw %}<span class="math inline">\(C\)</span>{% endraw %} on the diagonal:</p>
{% raw %}<div class="math display">\[
\Gamma_{kk}(E)=\int\mathbf1_E(y,y)\,C(dy),
\qquad E\in\mathscr B(\mathbb R^2).
\]</div>{% endraw %}
<p>Both marginals are {% raw %}<span class="math inline">\(C\leq\mu_d\)</span>{% endraw %}, and the mass of unequal pairs is zero. If {% raw %}<span class="math inline">\(t=O=0\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(\Gamma_{kk}=0\)</span>{% endraw %}; no division is needed.</p>
<p>If {% raw %}<span class="math inline">\(t&gt;O\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(a=t-O&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(R_d=\mu_d-H\)</span>{% endraw %}. The measures {% raw %}<span class="math inline">\(R_0,R_1\)</span>{% endraw %} have densities {% raw %}<span class="math inline">\((f_0-f_1)_+\)</span>{% endraw %} and {% raw %}<span class="math inline">\((f_1-f_0)_+\)</span>{% endraw %}, so they are mutually singular. Their masses are {% raw %}<span class="math inline">\(p_d-O\geq a\)</span>{% endraw %}. Set</p>
{% raw %}<div class="math display">\[
U_d=\frac{a}{p_d-O}R_d,\qquad
\Gamma_{kk}=\operatorname{diag}(H)+\frac{U_0\otimes U_1}{a}.
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\operatorname{diag}(H)\)</span>{% endraw %} is the pushforward of {% raw %}<span class="math inline">\(H\)</span>{% endraw %} under {% raw %}<span class="math inline">\(y\mapsto(y,y)\)</span>{% endraw %}. Each {% raw %}<span class="math inline">\(U_d\)</span>{% endraw %} has mass {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and is dominated by {% raw %}<span class="math inline">\(R_d\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\Gamma_{kk}\)</span>{% endraw %} has mass {% raw %}<span class="math inline">\(O+a=t\)</span>{% endraw %}, with marginals {% raw %}<span class="math inline">\(T_{dk}=H+U_d\leq\mu_{dk}\)</span>{% endraw %}. The product term has mass {% raw %}<span class="math inline">\(a\)</span>{% endraw %} and gives no mass to equal outcomes: its two marginal measures are concentrated on disjoint measurable sets. Hence the unequal-pair mass is exactly {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. In the previous case define {% raw %}<span class="math inline">\(T_{dk}=C\)</span>{% endraw %}. The construction therefore gives, in both cases,</p>
{% raw %}<div class="math display">\[
T_{dk}(\mathbb R)=\vartheta_{kk},\qquad
T_{dk}\leq\mu_{dk},\qquad
\Gamma_{kk}\{y_0\ne y_1\}=(\vartheta_{kk}-O_k)_+.
\]</div>{% endraw %}
<p><em>Mover allocations.</em> Let {% raw %}<span class="math inline">\(L_{dk}=\mu_{dk}-T_{dk}\)</span>{% endraw %}. Its mass is {% raw %}<span class="math inline">\(p_{dk}-\vartheta_{kk}\)</span>{% endraw %}. For each {% raw %}<span class="math inline">\(l\ne k\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\vartheta_{lk}&gt;0\)</span>{% endraw %}, define two measures of mass {% raw %}<span class="math inline">\(\vartheta_{lk}\)</span>{% endraw %} by</p>
{% raw %}<div class="math display">\[
A_{lk}=\frac{\vartheta_{lk}}{p_{0l}-\vartheta_{ll}}L_{0l},
\qquad
B_{lk}=\frac{\vartheta_{lk}}{p_{1k}-\vartheta_{kk}}L_{1k},
\qquad
\Gamma_{lk}=\frac{A_{lk}\otimes B_{lk}}{\vartheta_{lk}}.
\]</div>{% endraw %}
<p>The denominators are positive because their respective row or column sums include {% raw %}<span class="math inline">\(\vartheta_{lk}\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(\Gamma_{lk}=0\)</span>{% endraw %} when {% raw %}<span class="math inline">\(\vartheta_{lk}=0\)</span>{% endraw %}. Summing over movers in a row recovers {% raw %}<span class="math inline">\(L_{0l}\)</span>{% endraw %}; summing over movers in a column recovers {% raw %}<span class="math inline">\(L_{1k}\)</span>{% endraw %}. It follows that</p>
{% raw %}<div class="math display">\[
\sum_k\Gamma_{lk}(A\times\mathbb R)=\mu_{0l}(A),
\qquad
\sum_l\Gamma_{lk}(\mathbb R\times A)=\mu_{1k}(A).
\]</div>{% endraw %}
<p>The finitely many measures {% raw %}<span class="math inline">\(\Gamma_{lk}\)</span>{% endraw %} have total mass {% raw %}<span class="math inline">\(\sum_{l,k}\vartheta_{lk}=1\)</span>{% endraw %}. Together they define a probability law for a stratum label and a pair {% raw %}<span class="math inline">\((Y_0,Y_1)\)</span>{% endraw %} with exactly the required observed margins.</p>
<p><em>Completion of potential outcomes.</em> On stratum {% raw %}<span class="math inline">\(S_{lk}\)</span>{% endraw %}, set {% raw %}<span class="math inline">\(M(0)=m_l\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M(1)=m_k\)</span>{% endraw %}. For a mover {% raw %}<span class="math inline">\(l\ne k\)</span>{% endraw %}, assign</p>
{% raw %}<div class="math display">\[
Y(0,m_l)=Y(1,m_l)=Y_0,
\qquad
Y(0,m_k)=Y(1,m_k)=Y_1.
\]</div>{% endraw %}
<p>At every other mediator value, assign the same fixed outcome from the outcome space under both treatments. For a stayer {% raw %}<span class="math inline">\(S_{kk}\)</span>{% endraw %}, assign {% raw %}<span class="math inline">\(Y(0,m_k)=Y_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Y(1,m_k)=Y_1\)</span>{% endraw %}, again making the two potential outcomes equal at every other mediator value. These assignments are consistent because {% raw %}<span class="math inline">\(m_l\ne m_k\)</span>{% endraw %} for movers.</p>
<p>Finally, draw {% raw %}<span class="math inline">\(D\)</span>{% endraw %} independently of all constructed variables with the observed treatment probability, and impose consistency. The marginal identities above reproduce the joint law of {% raw %}<span class="math inline">\((Y,M,D)\)</span>{% endraw %}. The unequal-pair mass in each diagonal stratum gives the asserted {% raw %}<span class="math inline">\(r_k\)</span>{% endraw %}, simultaneously for all {% raw %}<span class="math inline">\(k\)</span>{% endraw %}.</p>
<p>Necessity of the full-mediation restrictions follows from Proposition 1 of the preceding post. If {% raw %}<span class="math inline">\(\vartheta_{kk}\leq O_k\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(k\)</span>{% endraw %}, the construction gives equal outcomes on every positive-mass diagonal stratum, and the completion imposes equality at every mediator value on every other stratum. It therefore satisfies the sharp null. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<h3 data-note-section="11" id="23-59-appendix-trimming">11. Appendix: trimming with atoms</h3>
<div class="proof">
<p><strong>Proof.</strong> Suppose first {% raw %}<span class="math inline">\(0&lt;a&lt;1\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(q=Q_F(a)\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(F(q-)\leq a\leq F(q)\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(s_*(y)=1\)</span>{% endraw %} for {% raw %}<span class="math inline">\(y&lt;q\)</span>{% endraw %}, {% raw %}<span class="math inline">\(s_*(y)=0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(y&gt;q\)</span>{% endraw %}, and choose</p>
{% raw %}<div class="math display">\[
s_*(q)=\frac{a-F(q-)}{F(q)-F(q-)}
\]</div>{% endraw %}
<p>when the denominator is positive. If there is no atom at {% raw %}<span class="math inline">\(q\)</span>{% endraw %}, the quantile inequalities imply {% raw %}<span class="math inline">\(F(q-)=F(q)=a\)</span>{% endraw %} and the value at {% raw %}<span class="math inline">\(q\)</span>{% endraw %} is immaterial. Thus {% raw %}<span class="math inline">\(\int s_*\,dF=a\)</span>{% endraw %}.</p>
<p>For any other admissible {% raw %}<span class="math inline">\(s\)</span>{% endraw %}, {% raw %}<span class="math inline">\((y-q)(s(y)-s_*(y))\geq0\)</span>{% endraw %} pointwise. The equal mass constraints and integrability give</p>
{% raw %}<div class="math display">\[
\int y(s-s_*)\,dF
=\int(y-q)(s-s_*)\,dF\geq0.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(U\)</span>{% endraw %} is uniform on {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(Q_F(U)\)</span>{% endraw %} has distribution {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, since {% raw %}<span class="math inline">\(P(Q_F(U)\leq y)=F(y)\)</span>{% endraw %}. Selecting {% raw %}<span class="math inline">\(U\leq a\)</span>{% endraw %} induces exactly the rule {% raw %}<span class="math inline">\(s_*\)</span>{% endraw %}, including its fractional selection at {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(\int y s_*\,dF=\int_0^a Q_F(u)\,du\)</span>{% endraw %}. This proves the lower endpoint and its attainment. Selecting the upper tail, with fractional selection at its boundary atom, proves the upper endpoint by the reversed inequality. For {% raw %}<span class="math inline">\(a=1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(s=1\)</span>{% endraw %} almost surely is the only admissible rule and both endpoints equal the mean; no value of {% raw %}<span class="math inline">\(Q_F\)</span>{% endraw %} at zero or one is needed.</p>
<p>If {% raw %}<span class="math inline">\(0&lt;a&lt;b\leq1\)</span>{% endraw %}, monotonicity of the quantile implies {% raw %}<span class="math inline">\(Q_F(u)\geq L_F(a)\)</span>{% endraw %} for almost every {% raw %}<span class="math inline">\(u\in(a,b)\)</span>{% endraw %}. Therefore {% raw %}<span class="math inline">\(bL_F(b)=aL_F(a)+\int_a^b Q_F(u)\,du\geq bL_F(a)\)</span>{% endraw %}. Applying the same argument to the lower tail of {% raw %}<span class="math inline">\(-Y\)</span>{% endraw %} proves that {% raw %}<span class="math inline">\(U_F\)</span>{% endraw %} is nonincreasing. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<h3 data-note-section="12" id="23-59-appendix-finite-sample">12. Appendix: the finite-sample probability bound</h3>
<div class="proof">
<p><strong>Proof.</strong> Conditional on the assignment labels, observations within arm {% raw %}<span class="math inline">\(d\)</span>{% endraw %} are iid from the corresponding outcome-mediator law. For one cell its indicators are Bernoulli with mean {% raw %}<span class="math inline">\(q\)</span>{% endraw %}. Let</p>
{% raw %}<div class="math display">\[
h(\lambda)=\log\mathbb{E}\exp\{\lambda(H-q)\},\qquad H\sim\operatorname{Bernoulli}(q).
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(h(0)=h&#x27;(0)=0\)</span>{% endraw %}. Its second derivative is the Bernoulli variance under exponential tilting and is at most {% raw %}<span class="math inline">\(1/4\)</span>{% endraw %}, including the degenerate cases {% raw %}<span class="math inline">\(q=0,1\)</span>{% endraw %}. Taylor’s formula with integral remainder gives {% raw %}<span class="math inline">\(h(\lambda)\leq\lambda^2/8\)</span>{% endraw %} for every real {% raw %}<span class="math inline">\(\lambda\)</span>{% endraw %}. Independence and Markov’s inequality therefore give, for {% raw %}<span class="math inline">\(r&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\begin{aligned}
P(\widehat q-q\geq r\mid D_1,\ldots,D_n)
&amp;\leq\inf_{\lambda&gt;0}\exp\{-\lambda n_dr+n_d\lambda^2/8\}\\
&amp;=\exp(-2n_dr^2).
\end{aligned}
\]</div>{% endraw %}
<p>Applying the same bound to the lower tail yields {% raw %}<span class="math inline">\(P(|\widehat q-q|&gt;\epsilon_d\mid D_1,\ldots,D_n)\leq\alpha/L\)</span>{% endraw %}. A union bound over all {% raw %}<span class="math inline">\(L\)</span>{% endraw %} cells proves</p>
{% raw %}<div class="math display">\[
P(q\notin\mathcal C_n\mid D_1,\ldots,D_n)\leq\alpha
\]</div>{% endraw %}
<p>when both arms are nonempty. The simplex constraints hold for the true vector and do not reduce this coverage. Under the null, {% raw %}<span class="math inline">\(q\in\mathcal Q_0\)</span>{% endraw %} by Theorem 1. Whenever {% raw %}<span class="math inline">\(q\in\mathcal C_n\)</span>{% endraw %}, the intersection is nonempty, so rejection implies confidence-set failure. Conditional rejection probability is at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for nonempty arms and zero otherwise. Averaging over assignments gives rejection probability at most {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for every cell law satisfying the null. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
</div>
<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-kwon_testing_2024" class="csl-entry" role="listitem">
Kwon, Soonwoo, and Jonathan Roth. 2024. <span>“Testing Mechanisms.”</span> arXiv. <a href="https://doi.org/10.48550/arXiv.2404.11739">https://doi.org/10.48550/arXiv.2404.11739</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series">
<p>
Previous: <a href="{% post_url 2024-07-13-testing-mediation-principal-strata-and-observable-bounds %}">Testing Mediation: Principal Strata and Observable Bounds</a>
</p>
</nav>
</div>
