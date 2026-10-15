---
layout: "post"
title: "Stochastic Equicontinuity"
date: "2022-10-08"
tags: ["statistics", "empirical processes"]
excerpt: "This argument is the standard local quadratic expansion and stochastic equicontinuity route used in Pollard-style treatments of M-estimation, and matches the general asymptotic normality statement for M-estimators (via an argmax/argmin theorem)."
note_series: "Empirical processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Empirical Process/stats.tex"
---

<div class="note-content" markdown="0">

<p>Taylor expansion often reduces an estimator to a linear term and a remainder evaluated at a random parameter. Pointwise convergence of that remainder is insufficient: the estimated parameter depends on the same sample. Stochastic equicontinuity supplies control over a whole neighborhood, allowing the random parameter to be substituted into the expansion.</p>

<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. with law {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. For a function {% raw %}<span class="math inline">\(f\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(Pf=\mathbb{E} f(X_1)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nf=n^{-1}\sum_{i=1}^n f(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nf=\sqrt n(P_n-P)f\)</span>{% endraw %}. Rademacher variables are independent random signs, independent of the observations. See the <a href="{% post_url 2022-09-03-empirical-processes-tensorization-and-the-entropy-method %}">empirical-process setup</a> for measurability conventions.</p>

<div id="stochastic-equicontinuity" data-note-section="title">

</div>
<p>Analyses of statistical procedures can rely heavily on Taylor’s theorem and regularity conditions. For example, maximum likelihood estimation relies on maximizing random criterion functions: if {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} are independent draws from a distribution {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %} (admitting a family of density functions {% raw %}<span class="math inline">\(\{p(\cdot,\theta)\}\)</span>{% endraw %}), then the true and unknown parameter {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} can be estimated by finding the argmax of {% raw %}<span class="math inline">\(G_n (\theta) = \frac1n \sum_{1 \leq i \leq n} \ln p(X_i,\theta)\)</span>{% endraw %}.</p>

<p>To identify the remainder that needs uniform control, write {% raw %}<span class="math inline">\(g_0 (\cdot,\theta) = \ln p(\cdot, \theta)\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(g_i (\cdot,\theta)\)</span>{% endraw %} be the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}th derivative of {% raw %}<span class="math inline">\(g_0\)</span>{% endraw %} for {% raw %}<span class="math inline">\(i = 1,2,3\)</span>{% endraw %}. Taylor’s theorem implies </p>

{% raw %}<div class="math display">\[\begin{aligned}
    g_0(\cdot, \theta) = g_0(\cdot, \theta_0) + g_1(\cdot, \theta_0) (\theta-\theta_0) + \frac{g_2(\cdot, \theta_0)}{2} (\theta-\theta_0)^2 + \frac{g_3(\cdot, \theta^*)}{6} (\theta-\theta_0)^3 ~.
\end{aligned}\]</div>{% endraw %}
<p> Here, {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} lies between {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}. Integrating with respect to the empirical measure over {% raw %}<span class="math inline">\(X_1,\dots,X_n\)</span>{% endraw %}, denoted {% raw %}<span class="math inline">\(\widehat P_n\)</span>{% endraw %}, implies </p>

{% raw %}<div class="math display">\[\begin{aligned}
    G_n(\theta) = G_n(\theta_0) + (\theta-\theta_0) \widehat P_n g_1 + \frac{(\theta-\theta_0)^2}{2} \widehat P_n g_2 + R_n (\theta) ~,
\end{aligned}\]</div>{% endraw %}
<p>The intermediate point in the pointwise Taylor formula may depend on the observation as well as on {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. A concrete sufficient condition for controlling the remainder is an integrable envelope {% raw %}<span class="math inline">\(H\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\sup_{|\theta-\theta_0|\leq\delta}|g_3(x,\theta)|\leq H(x)\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[|R_n(\theta)|\leq\frac{|\theta-\theta_0|^3}{6}P_nH,\qquad\sup_{0&lt;|\theta-\theta_0|\leq\delta_n}\frac{|R_n(\theta)|}{|\theta-\theta_0|^2}\leq\frac{\delta_n}{6}P_nH=o_P(1)\]</div>{% endraw %}
<p>for every deterministic {% raw %}<span class="math inline">\(\delta_n\downarrow0\)</span>{% endraw %}, by the law of large numbers. If {% raw %}<span class="math inline">\(P|g_2(\cdot,\theta_0)|&lt;\infty\)</span>{% endraw %}, its empirical average converges to the population curvature. A score central limit theorem also requires finite score variance; consistency, an interior optimum, nonzero curvature, and sufficiently accurate optimization are separate requirements. Integrability of the second derivative alone does not imply an estimator CLT.</p>
<div id="def:stochastic-equicontinuity" class="definition" data-note-number="1" data-note-kind="Definition">
<p><strong>Definition 1</strong>.  Let {% raw %}<span class="math inline">\((T,d)\)</span>{% endraw %} be a pseudometric space where {% raw %}<span class="math inline">\(d\)</span>{% endraw %} is a semimetric. Let {% raw %}<span class="math inline">\(\{Z_n(t): t \in T\}\)</span>{% endraw %} be a stochastic process. We say {% raw %}<span class="math inline">\(\{Z_n\}\)</span>{% endraw %} is <strong>stochastically equicontinuous at {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %}</strong> if, for each {% raw %}<span class="math inline">\(\eta &gt; 0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, there exists a neighbourhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} of {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %} where </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \limsup_{n \to \infty} \mathbf P\,\,\!\!\left( \sup_U |Z_n(t) - Z_n(t_0)| &gt; \eta \right) &lt; \varepsilon ~.
    
\end{aligned}\]</div>{% endraw %}
</div>
<p>Probabilities of potentially nonmeasurable suprema are understood as outer probabilities; under a countable separability condition they are ordinary probabilities. If {% raw %}<span class="math inline">\(t_n\to_Pt_0\)</span>{% endraw %}, stochastic equicontinuity immediately implies {% raw %}<span class="math inline">\(Z_n(t_n)-Z_n(t_0)=o_P(1)\)</span>{% endraw %}: for a fixed neighborhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, the probability of a deviation exceeds at most {% raw %}<span class="math inline">\(P(t_n\notin U)+P^*(\sup_U|Z_n(t)-Z_n(t_0)|&gt;\eta)\)</span>{% endraw %}. First take the limsup in {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, then shrink {% raw %}<span class="math inline">\(U\)</span>{% endraw %}.</p>
<p>The same issue appears for general minimum-criterion estimators, even when the sample criterion is not classically differentiable. Suppose we study {% raw %}<span class="math inline">\(\mathcal F = \{f(\cdot,t): t \in T\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T \subset \mathbb R^k\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}-integrable functions on the set {% raw %}<span class="math inline">\(S\)</span>{% endraw %} where {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %} lives. Let {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} be the empirical measure formed from {% raw %}<span class="math inline">\(n\)</span>{% endraw %} independent observations drawn from {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!\)</span>{% endraw %}. Let the empirical process be written as {% raw %}<span class="math inline">\(\mathbb G_n (f) = \sqrt n(\widehat P_n - \mathbf P\,\,\!\!) (f)\)</span>{% endraw %} as applied to {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(F(t) = \mathbf P\,\,\!\!f(\cdot, t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(F_n(t) = \widehat P_n f(\cdot,t)\)</span>{% endraw %}. It will be shown that if we want to minimize {% raw %}<span class="math inline">\(\{F_n(\cdot)\}\)</span>{% endraw %}, then we can study a suitable sequence {% raw %}<span class="math inline">\(\{\tau_n\} \subset T\)</span>{% endraw %} that actually comes close to minimizing the family of functions. To proceed with showing this, we can write </p>

{% raw %}<span id="eq:linear-approximation-f-t"></span><div class="math display">\[\begin{aligned}
 
    f(\cdot, t) = f(\cdot, t_0) + (t-t_0)&#x27; \Delta(\cdot) + |t-t_0| r(\cdot,t) ~,
\end{aligned}\tag{1}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\Delta(\cdot)\)</span>{% endraw %} is a vector of {% raw %}<span class="math inline">\(k\)</span>{% endraw %} real functions defined on {% raw %}<span class="math inline">\(S\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r(\cdot,t_0) = 0\)</span>{% endraw %}. The expansion is useful when the normalized remainder becomes small in mean square. We therefore impose size constraints on {% raw %}<span class="math inline">\(r(\cdot,t)\)</span>{% endraw %} and therefore {% raw %}<span class="math inline">\(f(\cdot,t)\)</span>{% endraw %}. In particular, a sensible definition is {% raw %}<span class="math inline">\(\mathbf P\,\,\!\!|r(\cdot,t)|^2 \xrightarrow{t \to t_0} 0\)</span>{% endraw %}, so that the criterion is differentiable as a map into {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}. This is a property of the criterion functions; it is distinct from differentiability in quadratic mean of square-root densities in a statistical model. We can work with {% raw %}<span class="math inline">\(L^2(\mathbf P\,\,\!\!)\)</span>{% endraw %} directly, consider a seminorm {% raw %}<span class="math inline">\(\rho_P\)</span>{% endraw %} on it, and focus our attention on the set {% raw %}<span class="math inline">\(\mathcal R = \{r(\cdot,t)\}\)</span>{% endraw %}. A sufficient route to stochastic equicontinuity of {% raw %}<span class="math inline">\(\{\mathbb G_n r(\cdot,t)\}\)</span>{% endraw %} is the following condition, provided {% raw %}<span class="math inline">\(\rho_P(r_t)\to0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(t\to t_0\)</span>{% endraw %}: for {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\eta &gt; 0\)</span>{% endraw %}, there exists a neighbourhood {% raw %}<span class="math inline">\(V \subset \mathcal R\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\limsup_{n \to \infty} \mathbf P\,\,\!\!(\sup_V |\mathbb G_n r| &gt; \eta) &lt; \varepsilon\)</span>{% endraw %}, i.e. {% raw %}<span class="math inline">\(V = \{r \in \mathcal R:  \rho_P(r) \leq \delta\}\)</span>{% endraw %} for some {% raw %}<span class="math inline">\(\delta &gt; 0\)</span>{% endraw %}.</p>

<div id="result-2" class="remark" data-note-number="2" data-note-kind="Remark">
<p><strong>Remark 2.</strong> If {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %} is an interior local minimum of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Pr_t^2\to0\)</span>{% endraw %}, integration of the linear approximation gives {% raw %}<span class="math inline">\(F(t)-F(t_0)=(t-t_0)^\top P\Delta+o(|t-t_0|)\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(P\Delta=0\)</span>{% endraw %}, by taking directional derivatives in both directions. Mean-square differentiability by itself, without the interior-minimum hypothesis, would not give this conclusion.</p>

</div>
<div id="thm:tau-n-stochastic-equicontinuity" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong>.  Let {% raw %}<span class="math inline">\(\{\tau_n\}\)</span>{% endraw %} be a sequence of random vectors converging in probability to {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %} where {% raw %}<span class="math inline">\(F(t_0)\)</span>{% endraw %} is the minimum in the function class considered. Let {% raw %}<span class="math inline">\(r(\cdot,t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Delta(\cdot)\)</span>{% endraw %} be the functions defined in the linear approximation <a href="#eq:linear-approximation-f-t" data-reference-type="eqref" data-reference="eq:linear-approximation-f-t">(1)</a>. Assume the mean-square remainder condition {% raw %}<span class="math inline">\(P r_t^2\to0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(t\to t_0\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(r_{t_0}=0\)</span>{% endraw %}. Suppose the following conditions hold.</p>

<ol>
<li><p>{% raw %}<span class="math inline">\(t_0 \in T^\circ\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(F(\cdot)\)</span>{% endraw %} is twice differentiable at the interior minimizer and has an invertible Hessian matrix {% raw %}<span class="math inline">\(V\)</span>{% endraw %} at {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(F_n(\tau_n) \le \inf_{t\in T}F_n(t)+\varepsilon_n,\quad \varepsilon_n\ge0,\quad n\varepsilon_n\xrightarrow{P}0\)</span>{% endraw %}.</p></li>
<li><p>The components of {% raw %}<span class="math inline">\(\Delta(\cdot)\)</span>{% endraw %} are all elements of {% raw %}<span class="math inline">\(L^2(\mathbf P\,\,\!\!)\)</span>{% endraw %}.</p></li>
<li><p>The sequence {% raw %}<span class="math inline">\(\{\mathbb G_n r(\cdot,t)\}\)</span>{% endraw %} is stochastic equicontinuous at {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %}.</p></li>
</ol>
<p>Then, {% raw %}<span class="math inline">\(\sqrt n (\tau_n - t_0) \xrightarrow{d} \mathcal{N}(0,V^{-1} (\mathbf P\,\,\!\!(\Delta \Delta&#x27;) - (\mathbf P\,\,\!\!\Delta)(\mathbf P\,\,\!\!\Delta)&#x27;)V^{-1})\)</span>{% endraw %}.</p>

</div>
<p>For background on this approach see Pollard (1984). The argument below proves the stated version directly: it first establishes the rate and then substitutes the random estimator into a compact uniform expansion.</p>


<div class="proof">
<p><em>Proof of Theorem <a href="#thm:tau-n-stochastic-equicontinuity" data-reference-type="ref" data-reference="thm:tau-n-stochastic-equicontinuity">3</a>.</em> Write {% raw %}<span class="math inline">\(P g = \int g \, dP\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_n g = \frac1n\sum_{i=1}^n g(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_n g = \sqrt n (P_n-P)g\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(t\in T\)</span>{% endraw %} write {% raw %}<span class="math inline">\(f_t(\cdot)=f(\cdot,t)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r_t(\cdot)=r(\cdot,t)\)</span>{% endraw %}.</p>

<p><strong>Step 1 (first-order condition and positivity).</strong> Because {% raw %}<span class="math inline">\(t_0\in T^\circ\)</span>{% endraw %} and {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %} is a (local) minimizer of the differentiable map {% raw %}<span class="math inline">\(t\mapsto F(t)=P f_t\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(\nabla F(t_0)=0\)</span>{% endraw %}. Integrating the linear approximation <a href="#eq:linear-approximation-f-t" data-reference-type="eqref" data-reference="eq:linear-approximation-f-t">(1)</a> gives, for {% raw %}<span class="math inline">\(t\)</span>{% endraw %} near {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:F-linearized"></span><div class="math display">\[\begin{aligned}
F(t)-F(t_0)
&amp;= P(f_t-f_{t_0})
= (t-t_0)&#x27; P\Delta + |t-t_0| \, P r_t . 
\end{aligned}\tag{2}\]</div>{% endraw %}
<p>For any fixed unit vector {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(t=t_0+av\)</span>{% endraw %}. Cauchy–Schwarz gives {% raw %}<span class="math inline">\(Pr_t\to0\)</span>{% endraw %}, so the directional derivative of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is {% raw %}<span class="math inline">\(v'P\Delta\)</span>{% endraw %}. At an interior differentiable minimum this derivative is zero for every {% raw %}<span class="math inline">\(v\)</span>{% endraw %}, hence</p>

{% raw %}<span id="eq:PDelta0"></span><div class="math display">\[\begin{aligned}
P\Delta = 0. 
\end{aligned}\tag{3}\]</div>{% endraw %}
<p> Assumption (2) gives that the Hessian matrix {% raw %}<span class="math inline">\(V=\nabla^2 F(t_0)\)</span>{% endraw %} exists and is invertible. Since {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %} is a local minimizer, {% raw %}<span class="math inline">\(V\)</span>{% endraw %} must be symmetric positive definite; denote </p>

{% raw %}<div class="math display">\[\lambda_{\min} \equiv \lambda_{\min}(V)&gt;0.\]</div>{% endraw %}
<p><strong>Step 2 (second-order expansion of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} and a quadratic lower bound).</strong> By twice differentiability of {% raw %}<span class="math inline">\(F\)</span>{% endraw %} at {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:F-Taylor"></span><div class="math display">\[\begin{aligned}
F(t_0+u) = F(t_0) + \nabla F(t_0)&#x27;u + \frac12 u&#x27;Vu + o(\|u\|^2)
= F(t_0) + \frac12 u&#x27;Vu + o(\|u\|^2). 
\end{aligned}\tag{4}\]</div>{% endraw %}
<p> Therefore there exists {% raw %}<span class="math inline">\(\delta_0&gt;0\)</span>{% endraw %} such that whenever {% raw %}<span class="math inline">\(\|u\|\le \delta_0\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:quad-lower"></span><div class="math display">\[\begin{aligned}
\left|o(\|u\|^2)\right| \le \frac{\lambda_{\min}}{4}\|u\|^2,
\qquad\text{hence}\qquad
F(t_0+u)-F(t_0) \ge \frac{\lambda_{\min}}{4}\|u\|^2. 
\end{aligned}\tag{5}\]</div>{% endraw %}
<p><strong>Step 3 (local expansion of {% raw %}<span class="math inline">\(F_n\)</span>{% endraw %} on {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %}-scales).</strong> For {% raw %}<span class="math inline">\(h\in\mathbb R^k\)</span>{% endraw %} define {% raw %}<span class="math inline">\(t_{n,h}\equiv t_0+h/\sqrt n\)</span>{% endraw %} (which lies in {% raw %}<span class="math inline">\(T\)</span>{% endraw %} for all large {% raw %}<span class="math inline">\(n\)</span>{% endraw %} because {% raw %}<span class="math inline">\(t_0\in T^\circ\)</span>{% endraw %}). Consider the local criterion </p>

{% raw %}<div class="math display">\[Q_n(h)\ \equiv\ n\left(F_n(t_{n,h})-F_n(t_0)\right)
\quad\text{where}\quad
F_n(t)=P_n f_t.\]</div>{% endraw %}
<p> Decompose </p>

{% raw %}<span id="eq:Qn-decomp"></span><div class="math display">\[\begin{aligned}
Q_n(h)
&amp;= n\left(F(t_{n,h})-F(t_0)\right)
 + n\left[(F_n-F)(t_{n,h})-(F_n-F)(t_0)\right]. 
\end{aligned}\tag{6}\]</div>{% endraw %}
<p> For the deterministic part, set {% raw %}<span class="math inline">\(u=h/\sqrt n\)</span>{% endraw %} in <a href="#eq:F-Taylor" data-reference-type="eqref" data-reference="eq:F-Taylor">(4)</a> to get </p>

{% raw %}<span id="eq:det-part"></span><div class="math display">\[\begin{aligned}
n\left(F(t_{n,h})-F(t_0)\right)
= \frac12 h&#x27;Vh + nR(h/\sqrt n)
= \frac12 h&#x27;Vh + o(1), 
\end{aligned}\tag{7}\]</div>{% endraw %}
<p>uniformly over {% raw %}<span class="math inline">\(\|h\|\leq M\)</span>{% endraw %} for each fixed {% raw %}<span class="math inline">\(M\)</span>{% endraw %}. Here {% raw %}<span class="math inline">\(R(u)=F(t_0+u)-F(t_0)-u'Vu/2=o(\|u\|^2)\)</span>{% endraw %}, and the precise uniform bound is</p>
{% raw %}<div class="math display">\[\sup_{\|h\|\leq M}n|R(h/\sqrt n)|\leq M^2\sup_{0&lt;\|u\|\leq M/\sqrt n}\frac{|R(u)|}{\|u\|^2}\longrightarrow0.\]</div>{% endraw %}


<p>For the stochastic part, use <a href="#eq:linear-approximation-f-t" data-reference-type="eqref" data-reference="eq:linear-approximation-f-t">(1)</a>: </p>

{% raw %}<div class="math display">\[f_{t_{n,h}}-f_{t_0}
= (t_{n,h}-t_0)&#x27;\Delta + |t_{n,h}-t_0|\, r_{t_{n,h}}
= \frac1{\sqrt n} h&#x27;\Delta + \frac{\|h\|}{\sqrt n}\, r_{t_{n,h}}.\]</div>{% endraw %}
<p> Hence </p>

{% raw %}<span id="eq:stoch-part"></span><div class="math display">\[\begin{aligned}
n\left[(F_n-F)(t_{n,h})-(F_n-F)(t_0)\right]
&amp;= n(P_n-P)\left(f_{t_{n,h}}-f_{t_0}\right) \notag\\
&amp;= \sqrt n\, h&#x27;(P_n-P)\Delta + \|h\|\,\sqrt n\,(P_n-P) r_{t_{n,h}} \notag\\
&amp;= h&#x27;\,\mathbb G_n\Delta + \|h\|\, \mathbb G_n r_{t_{n,h}}. 
\end{aligned}\tag{8}\]</div>{% endraw %}
<p><strong>Step 4 (use stochastic equicontinuity to control the remainder term).</strong> By assumption (5), {% raw %}<span class="math inline">\(\{\mathbb G_n r_t: t\in T\}\)</span>{% endraw %} is stochastically equicontinuous at {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %}. Because {% raw %}<span class="math inline">\(r_{t_0}\equiv 0\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(\mathbb G_n r_{t_0}=0\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Therefore, for any fixed {% raw %}<span class="math inline">\(\eta,\varepsilon&gt;0\)</span>{% endraw %}, there exists a neighborhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} of {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %} such that </p>

{% raw %}<div class="math display">\[\limsup_{n\to\infty}\mathbf P\,\,\!\!\Big(\sup_{t\in U}|\mathbb G_n r_t|&gt;\eta\Big)&lt;\varepsilon.\]</div>{% endraw %}
<p> Fix {% raw %}<span class="math inline">\(M&lt;\infty\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(U\)</span>{% endraw %} so small that {% raw %}<span class="math inline">\(t_{n,h}\in U\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(\|h\|\le M\)</span>{% endraw %} and all large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Then </p>

{% raw %}<span id="eq:Gr-unif-op1"></span><div class="math display">\[\begin{aligned}
\sup_{\|h\|\le M} |\mathbb G_n r_{t_{n,h}}| \ \xrightarrow{p}\ 0, 
\end{aligned}\tag{9}\]</div>{% endraw %}
<p> and consequently, </p>

{% raw %}<span id="eq:hGr-unif-op1"></span><div class="math display">\[\begin{aligned}
\sup_{\|h\|\le M} \|h\|\,|\mathbb G_n r_{t_{n,h}}| \ \xrightarrow{p}\ 0. 
\end{aligned}\tag{10}\]</div>{% endraw %}
<p>Combining <a href="#eq:Qn-decomp" data-reference-type="eqref" data-reference="eq:Qn-decomp">(6)</a>–<a href="#eq:stoch-part" data-reference-type="eqref" data-reference="eq:stoch-part">(8)</a> with <a href="#eq:det-part" data-reference-type="eqref" data-reference="eq:det-part">(7)</a> and <a href="#eq:hGr-unif-op1" data-reference-type="eqref" data-reference="eq:hGr-unif-op1">(10)</a>, we have: for every fixed {% raw %}<span class="math inline">\(M&lt;\infty\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:Qn-unif-expansion"></span><div class="math display">\[\begin{aligned}
\sup_{\|h\|\le M}\Big|Q_n(h) - \Big(\frac12 h&#x27;Vh + h&#x27;\mathbb G_n\Delta\Big)\Big|
\ \xrightarrow{p}\ 0. 
\end{aligned}\tag{11}\]</div>{% endraw %}
<p><strong>Step 5 (prove the rate before using a compact local expansion).</strong> Let {% raw %}<span class="math inline">\(u_n=\tau_n-t_0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(h_n=\sqrt n\,u_n\)</span>{% endraw %}. The empirical near-minimization assumption is</p>
<span id="eq:near-min"></span>
{% raw %}<div class="math display">\[F_n(\tau_n)\le\inf_{t\in T}F_n(t)+\varepsilon_n,\qquad n\varepsilon_n=o_P(1).\tag{12}\]</div>{% endraw %}
<p>Consistency and stochastic equicontinuity give {% raw %}<span class="math inline">\(\mathbb G_nr_{\tau_n}=o_P(1)\)</span>{% endraw %}: outside a small consistency event the index lies in a fixed neighborhood on which the oscillation probability is arbitrarily small. Also {% raw %}<span class="math inline">\(\mathbb G_n\Delta=O_P(1)\)</span>{% endraw %} by the multivariate CLT. On the event {% raw %}<span class="math inline">\(\|u_n\|\le\delta_0\)</span>{% endraw %}, whose probability tends to one, use the quadratic lower bound (5) and the exact empirical decomposition from (1):</p>
{% raw %}<div class="math display">\[\frac{\lambda_{\min}}4\|h_n\|^2\le\|h_n\|\bigl(\|\mathbb G_n\Delta\|+|\mathbb G_nr_{\tau_n}|\bigr)+n\varepsilon_n.\]</div>{% endraw %}
<p>The right side is {% raw %}<span class="math inline">\(\|h_n\|O_P(1)+o_P(1)\)</span>{% endraw %}. The positive root of this quadratic inequality is bounded in probability, so {% raw %}<span class="math inline">\(h_n=O_P(1)\)</span>{% endraw %}. This establishes the rate without presuming that the random index already lies in a fixed compact set.</p>
<p>Set {% raw %}<span class="math inline">\(b_n=-V^{-1}\mathbb G_n\Delta=O_P(1)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %} is interior, {% raw %}<span class="math inline">\(t_0+b_n/\sqrt n\in T\)</span>{% endraw %} with probability tending to one; otherwise set the comparison point to {% raw %}<span class="math inline">\(t_0\)</span>{% endraw %}. Completing the square gives</p>
<span id="eq:complete-square"></span>
{% raw %}<div class="math display">\[\frac12h'Vh+h'\mathbb G_n\Delta=\frac12(h-b_n)'V(h-b_n)-\frac12b_n'Vb_n.\tag{13}\]</div>{% endraw %}
<p>Now the compact uniform approximation (11) applies at both tight indices: restrict them to a ball of radius {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, use that approximation, and then let {% raw %}<span class="math inline">\(M\to\infty\)</span>{% endraw %}. Near-minimization yields</p>
<span id="eq:gap"></span>
{% raw %}<div class="math display">\[\frac12(h_n-b_n)'V(h_n-b_n)=Q_n(h_n)-Q_n(b_n)+o_P(1)\le n\varepsilon_n+o_P(1)=o_P(1).\tag{14}\]</div>{% endraw %}
<p>The left side is nonnegative and at least {% raw %}<span class="math inline">\(\lambda_{\min}\|h_n-b_n\|^2/2\)</span>{% endraw %}. Therefore</p>
<span id="eq:ALR"></span>
{% raw %}<div class="math display">\[\sqrt n(\tau_n-t_0)=-V^{-1}\mathbb G_n\Delta+o_P(1).\tag{15}\]</div>{% endraw %}

<p><strong>Step 6 (CLT and conclusion).</strong> By assumption (4), {% raw %}<span class="math inline">\(\Delta\in L^2(P)^k\)</span>{% endraw %}, hence </p>

{% raw %}<div class="math display">\[\mathbb G_n\Delta
=\frac1{\sqrt n}\sum_{i=1}^n\left(\Delta(X_i)-P\Delta\right)
 \xrightarrow{d} \mathcal{N} \left(0,\ \Sigma\right),
\qquad
\Sigma \equiv P(\Delta\Delta&#x27;)-(P\Delta)(P\Delta)&#x27;.\]</div>{% endraw %}
<p> Combine this with <a href="#eq:ALR" data-reference-type="eqref" data-reference="eq:ALR">(15)</a> and Slutsky’s theorem to obtain </p>

{% raw %}<div class="math display">\[\sqrt n(\tau_n-t_0) \xrightarrow{d} \mathcal{N} \left(0,\ V^{-1}\Sigma V^{-1}\right),\]</div>{% endraw %}
<p> which is exactly the claim. ◻</p>

</div>
<p>The argument separates the curvature of the population criterion from the random linear term. Step 5 supplies the rate bound that permits the random estimator to enter the uniform local expansion.</p>

<div id="refs" class="references csl-bib-body hanging-indent" data-entry-spacing="0" role="list">
<div id="ref-pollard_convergence_1984" class="csl-entry" role="listitem">
Pollard, David. 1984. <em>Convergence of Stochastic Processes</em>. Springer Series in Statistics. New York, NY: Springer New York. <a href="https://doi.org/10.1007/978-1-4612-5254-2">https://doi.org/10.1007/978-1-4612-5254-2</a>.
</div>
</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-10-04-maximal-inequalities-via-concentration %}">Maximal Inequalities via Concentration</a> · Next: <a href="{% post_url 2022-10-11-chaining %}">Chaining</a></p></nav>

</div>
