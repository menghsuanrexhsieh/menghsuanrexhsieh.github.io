---
layout: "post"
title: "Quadratic Mean Differentiability"
date: "2022-04-13"
tags: ["statistics", "asymptotic theory"]
excerpt: "Quadratic-mean differentiability, verification through square-root densities, and the rate and equicontinuity arguments for likelihood estimators."
note_series: "Asymptotic testing"
note_source: "assets/notes/Overleaf Projects (32 items)/Invariant Tests and Quadratic Mean Differentiability/stats.tex"
redirect_from: ["/2023/04/08/quadratic-mean-differentiability/"]
---

<div class="note-content" markdown="0">
<p>Quadratic-mean differentiability (QMD) is differentiability of the square-root density in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}. It determines the score and Fisher information and controls changes in support. With additional conditions on the log likelihood, it also yields an asymptotically linear likelihood estimator.</p>

<p>The <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}#08-0-qmd-to-lan">contiguity note</a> derives the product-likelihood expansion, including its sequential form. Here the main results concern verification of QMD and likelihood estimation. Appendix A proves the empirical-process bounds needed to substitute the fitted parameter into a local expansion.</p>

<div data-note-section="title" id="quadratic-mean-differentiability">
</div>
<p>Let {% raw %}<span class="math inline">\(\Theta\subset\mathbb R^d\)</span>{% endraw %} be open, let {% raw %}<span class="math inline">\(\theta_0\in\Theta\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(P_\theta\)</span>{% endraw %} have density {% raw %}<span class="math inline">\(p_\theta\)</span>{% endraw %} with respect to a fixed {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}. All local expansions are at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}. The observations are i.i.d. when sample likelihoods are considered.</p>

<h2 id="qmd-definition">Definition and score identities</h2>
<p>The model is QMD at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} if there is {% raw %}<span class="math inline">\(\eta\in L^2(\mu;\mathbb R^d)\)</span>{% endraw %} such that {% raw %}<span class="math display">\[
\left\|\sqrt{p_{\theta_0+t}}-\sqrt{p_{\theta_0}}-t^\top\eta\right\|_{L^2(\mu)}=o(\|t\|).
\]</span>{% endraw %} The limit is taken over all {% raw %}<span class="math inline">\(t\to0\)</span>{% endraw %} with {% raw %}<span class="math inline">\(\theta_0+t\in\Theta\)</span>{% endraw %}.</p>
<p><em>Remark.</em> The <a href="#qmd-definition">definition of QMD</a> imposes an integrated remainder bound; it does not require pointwise differentiability of the log density. The next lemma identifies {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} with one half of the score times the square-root density.</p>
<div class="lemma" data-note-kind="Lemma" data-note-number="1" id="result-1">
<p>Lemma 1. If the model is QMD at the interior point {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(\eta_j\in L^2(\mu)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\eta_j=0\)</span>{% endraw %} almost everywhere on {% raw %}<span class="math inline">\(\{p_{\theta_0}=0\}\)</span>{% endraw %}, and the score</p>

{% raw %}<div class="math display">\[\dot\ell_{\theta_0}(x)=\begin{cases}2\eta(x,\theta_0)/\sqrt{p_{\theta_0}(x)},&amp;p_{\theta_0}(x)&gt;0,\\0,&amp;p_{\theta_0}(x)=0,\end{cases}\]</div>{% endraw %}

<p>has mean zero and finite second moment under {% raw %}<span class="math inline">\(P_{\theta_0}\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p>Proof. Put {% raw %}<span class="math inline">\(s=\sqrt{p_{\theta_0}}\)</span>{% endraw %}, and for a fixed direction {% raw %}<span class="math inline">\(u\)</span>{% endraw %}, {% raw %}<span class="math inline">\(s_t=\sqrt{p_{\theta_0+tu}}\)</span>{% endraw %}. QMD says</p>

{% raw %}<div class="math display">\[\|(s_t-s)/t-u^\top\eta\|_{L^2(\mu)}\longrightarrow0.\]</div>{% endraw %}

<p>Each difference quotient belongs to {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}, so its limit does also. Taking coordinate directions gives {% raw %}<span class="math inline">\(\eta_j\in L^2\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(\{s=0\}\)</span>{% endraw %}, the quotients for {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %} are nonnegative and those for {% raw %}<span class="math inline">\(t&lt;0\)</span>{% endraw %} are nonpositive. Their common {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} limit is therefore zero there. Both signs of {% raw %}<span class="math inline">\(t\)</span>{% endraw %} are available because {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} is interior.</p>
<p>Normalization gives {% raw %}<span class="math inline">\(\|s_t\|_2=\|s\|_2=1\)</span>{% endraw %}, hence</p>

{% raw %}<div class="math display">\[0=\int\frac{s_t-s}{t}(s_t+s)\,d\mu\longrightarrow2\int u^\top\eta\,s\,d\mu.\]</div>{% endraw %}

<p>Cauchy–Schwarz justifies the limit because the first factor converges in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} and the second converges to {% raw %}<span class="math inline">\(2s\)</span>{% endraw %} there. Thus {% raw %}<span class="math inline">\(E_{\theta_0}(u^\top\dot\ell_{\theta_0})=0\)</span>{% endraw %}. Finally {% raw %}<span class="math inline">\(E\|\dot\ell_{\theta_0}\|^2=4\int\|\eta\|^2\,d\mu&lt;\infty\)</span>{% endraw %}. ◻</p>
</div>
<p>The information matrix is therefore</p>

{% raw %}<div class="math display">\[I(\theta_0)=E_{\theta_0}[\dot\ell_{\theta_0}\dot\ell_{\theta_0}^\top]=4\int\eta(x,\theta_0)\eta(x,\theta_0)^\top\,d\mu(x).\]</div>{% endraw %}
<div class="lemma" data-note-kind="Lemma" data-note-number="2" id="result-2">
<p>Lemma 2. For every {% raw %}<span class="math inline">\(h\in\mathbb R^d\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\int|h^\top\eta(x,\theta_0)|^2\,d\mu(x)=\frac14h^\top I(\theta_0)h.\]</div>{% endraw %}
</div>
<div class="proof">
<p>Proof. Expand the square as {% raw %}<span class="math inline">\(\sum_{i=1}^d\sum_{j=1}^d h_ih_j\eta_i\eta_j\)</span>{% endraw %}. Each product is integrable by Cauchy–Schwarz, so finite summation and integration commute. The {% raw %}<span class="math inline">\((i,j)\)</span>{% endraw %}-entry of the integral is {% raw %}<span class="math inline">\(I_{ij}/4\)</span>{% endraw %}, giving the identity. In particular the information matrix is symmetric and nonnegative definite; invertibility, when used later, makes it positive definite. ◻</p>
</div>
<p>The next sufficient condition uses pointwise continuous differentiability of square-root densities and continuity of their integrated squared derivatives.</p>

<h2 id="qmd-sufficient-condition">A sufficient condition for QMD</h2>
<div class="theorem" data-note-kind="Theorem" data-note-number="3" id="result-3">
<p>Theorem 3. Suppose, outside one fixed {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-null set, {% raw %}<span class="math inline">\(\theta\mapsto s_\theta(x)=\sqrt{p_\theta(x)}\)</span>{% endraw %} is continuously differentiable on a neighborhood of {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, with gradient {% raw %}<span class="math inline">\(\eta(x,\theta)\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(I(\theta)=4\int\eta(x,\theta)\eta(x,\theta)^\top\,d\mu\)</span>{% endraw %} is finite nearby and continuous at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}. Then the model is QMD at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, with derivative {% raw %}<span class="math inline">\(\eta(\cdot,\theta_0)\)</span>{% endraw %}.</p>
<p>At points with positive density, {% raw %}<span class="math inline">\(\eta=\nabla p_\theta/(2\sqrt{p_\theta})\)</span>{% endraw %}; at points with zero density, {% raw %}<span class="math inline">\(\eta=0\)</span>{% endraw %}, since the differentiable nonnegative function {% raw %}<span class="math inline">\(s_\theta(x)\)</span>{% endraw %} has a local minimum.</p>
</div>
<div class="proof">
<p>Proof. First the gradients are continuous in {% raw %}<span class="math inline">\(L^2(\mu;\mathbb R^d)\)</span>{% endraw %}. For any {% raw %}<span class="math inline">\(\theta_n\to\theta_0\)</span>{% endraw %}, pointwise continuity gives {% raw %}<span class="math inline">\(\eta_n\to\eta_0\)</span>{% endraw %}, and continuity of the trace of {% raw %}<span class="math inline">\(I\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\int\|\eta_n\|^2\to\int\|\eta_0\|^2\)</span>{% endraw %}. Scheffé's argument applied to these nonnegative squared norms gives their {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} convergence: write the absolute difference as their sum minus twice their minimum, and use dominated convergence for the minimum. Now {% raw %}<span class="math inline">\(\|\eta_n-\eta_0\|^2\to0\)</span>{% endraw %} pointwise and is bounded by {% raw %}<span class="math inline">\(2\|\eta_n\|^2+2\|\eta_0\|^2\)</span>{% endraw %}, which converges in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. The generalized dominated-convergence argument gives {% raw %}<span class="math inline">\(\|\eta_n-\eta_0\|_2\to0\)</span>{% endraw %}. To see that last argument directly, subtract the integrand from its nonnegative majorant and apply Fatou; the convergent integrals of the majorants force the limsup of the smaller integrals to be zero.</p>
<p>Choose {% raw %}<span class="math inline">\(h\)</span>{% endraw %} so the entire segment {% raw %}<span class="math inline">\(\theta_0+th\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0\le t\le1\)</span>{% endraw %}, stays in the neighborhood. The fundamental theorem of calculus gives</p>

{% raw %}<div class="math display">\[s_{\theta_0+h}-s_{\theta_0}-h^\top\eta_0=\int_0^1 h^\top(\eta_{\theta_0+th}-\eta_0)\,dt.\]</div>{% endraw %}

<p>Jensen, Cauchy–Schwarz, and Tonelli imply</p>

{% raw %}<div class="math display">\[\|s_{\theta_0+h}-s_{\theta_0}-h^\top\eta_0\|_2^2\le\|h\|^2\int_0^1\|\eta_{\theta_0+th}-\eta_0\|_2^2\,dt\le\|h\|^2\sup_{\|v\|\le\|h\|}\|\eta_{\theta_0+v}-\eta_0\|_2^2=o(\|h\|^2).\]</div>{% endraw %}

<p>The integrated remainder bound is exactly the QMD condition. <a href="#result-3">Theorem 3</a> is the sufficient condition of van der Vaart, Lemma 7.6; the proof above gives the multivariate line-segment argument and the integrated convergence step. ◻</p>
</div>
<h2 id="qmd-examples">Examples and support changes</h2>
<p>For testing a simple null {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} against {% raw %}<span class="math inline">\(\theta_1\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(\mathcal L_N(\theta)=\prod_{i=1}^Np_\theta(X_i)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Lambda_N=\log\{\mathcal L_N(\theta_1)/\mathcal L_N(\theta_0)\}\)</span>{% endraw %}. The Neyman–Pearson test rejects for large {% raw %}<span class="math inline">\(\Lambda_N\)</span>{% endraw %}, with boundary randomization when needed to attain its level.</p>
<p>In the normal location model with known {% raw %}<span class="math inline">\(\sigma^2&gt;0\)</span>{% endraw %}, the constants in the density cancel, and summing the individual squared differences gives</p>

{% raw %}<div class="math display">\[\begin{aligned}\Lambda_N&amp;=\frac1{2\sigma^2}\sum_{i=1}^N\{(X_i-\theta_0)^2-(X_i-\theta_1)^2\}\\&amp;=\frac N{\sigma^2}\left\{(\theta_1-\theta_0)\bar X_N-\frac{\theta_1^2-\theta_0^2}{2}\right\}.\end{aligned}\]</div>{% endraw %}

<p>For a fixed {% raw %}<span class="math inline">\(\theta_1\ne\theta_0\)</span>{% endraw %}, the LLN under {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\Lambda_N/N\xrightarrow{P}-(\theta_1-\theta_0)^2/(2\sigma^2)\)</span>{% endraw %}; thus {% raw %}<span class="math inline">\(\Lambda_N\xrightarrow{P}-\infty\)</span>{% endraw %}. Fixed alternatives become distinguishable, whereas alternatives at distance {% raw %}<span class="math inline">\(N^{-1/2}\)</span>{% endraw %} produce a nondegenerate local problem.</p>
<p>Substitute {% raw %}<span class="math inline">\(\theta_1=\theta_0+h/\sqrt N\)</span>{% endraw %}. Expanding {% raw %}<span class="math inline">\(\theta_1^2-\theta_0^2=2\theta_0h/\sqrt N+h^2/N\)</span>{% endraw %} gives the exact identity</p>

{% raw %}<div class="math display">\[\Lambda_N=hZ_N-\frac{h^2}{2\sigma^2},\qquad Z_N=\frac{\sqrt N(\bar X_N-\theta_0)}{\sigma^2}\sim \mathcal{N}(0,\sigma^{-2})\quad\text{under }\theta_0.\]</div>{% endraw %}

<p>Hence {% raw %}<span class="math inline">\(\Lambda_N\sim \mathcal{N}(-h^2/(2\sigma^2),h^2/\sigma^2)\)</span>{% endraw %}, including the degenerate law at zero when {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %}. The random term is linear in the local displacement; the deterministic drift is negative and quadratic.</p>
<p>For a natural one-parameter exponential family, take {% raw %}<span class="math inline">\(p_\theta(x)=\exp\{\theta T(x)-A(\theta)\}\)</span>{% endraw %} relative to its fixed base measure, with {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} in the interior of the natural parameter domain. Differentiating the normalizing integral there gives {% raw %}<span class="math inline">\(E_{\theta_0}T=A'(\theta_0)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}_{\theta_0}(T)=A''(\theta_0)\)</span>{% endraw %}. The log likelihood ratio is</p>

{% raw %}<div class="math display">\[\Lambda_N=\frac h{\sqrt N}\sum_{i=1}^NT(X_i)-N\{A(\theta_0+h/\sqrt N)-A(\theta_0)\}.\]</div>{% endraw %}

<p>Taylor expansion of the single deterministic function {% raw %}<span class="math inline">\(A\)</span>{% endraw %} yields</p>

{% raw %}<div class="math display">\[N\{A(\theta_0+h/\sqrt N)-A(\theta_0)\}=h\sqrt N A'(\theta_0)+\frac12h^2 A''(\theta_0)+o(1).\]</div>{% endraw %}

<p>Subtracting cancels the mean of the sum, so</p>

{% raw %}<div class="math display">\[\Lambda_N=hW_N-\frac12h^2 A''(\theta_0)+o(1),\qquad W_N=N^{-1/2}\sum_i\{T(X_i)-A'(\theta_0)\}\Rightarrow \mathcal{N}(0,A''(\theta_0)).\]</div>{% endraw %}

<p>Interior natural parameters provide finite moments locally, justifying both derivatives and the CLT. This repeats the normal calculation with {% raw %}<span class="math inline">\(A''(\theta_0)\)</span>{% endraw %} in place of {% raw %}<span class="math inline">\(\sigma^{-2}\)</span>{% endraw %}.</p>
<p>In the normal location model, {% raw %}<span class="math inline">\(\eta_\theta(x)=(x-\theta)\sqrt{p_\theta(x)}/(2\sigma^2)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(4\int\eta_\theta^2=\sigma^{-2}\)</span>{% endraw %}. The square-root derivatives are continuous, so Theorem 3 verifies QMD. For the natural exponential family, {% raw %}<span class="math inline">\(\eta_\theta=(T-A'(\theta))\sqrt{p_\theta}/2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(4\int\eta_\theta^2=A''(\theta)\)</span>{% endraw %}. On the interior of the natural parameter domain, the normalizing function is smooth and the same sufficient condition applies.</p>
<div class="example" id="qmd-changing-support">
<p><strong>Example (Uniform scale).</strong> For {% raw %}<span class="math inline">\(P_\theta=\mathrm{Unif}[0,\theta]\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\theta&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %}, {% raw %}<span class="math display">\[
P_{\theta+t}(p_\theta=0)=\frac{t}{\theta+t}.
\]</span>{% endraw %} QMD would require this mass to be {% raw %}<span class="math inline">\(o(t^2)\)</span>{% endraw %}, since the score term vanishes outside the support of {% raw %}<span class="math inline">\(p_\theta\)</span>{% endraw %}. Thus this model is not QMD. Equivalently, {% raw %}<span class="math display">\[
H^2(P_{\theta+t},P_\theta)=2\left(1-\sqrt{\frac{\theta}{\theta+t}}\right)\sim\frac t\theta.
\]</span>{% endraw %} The probability carried by the changing support prevents a quadratic Hellinger expansion.</p>
</div>
<h2 id="qmd-likelihood-estimators">Likelihood estimators</h2>
<p>QMD controls the likelihood at deterministic local parameters. To study its maximizer, additional conditions must control the rate of the maximizer and the remainder at random parameters. In the following proposition, write {% raw %}<span class="math inline">\(\mathbb P_nf=n^{-1}\sum_i f(X_i)\)</span>{% endraw %} for the empirical average, {% raw %}<span class="math inline">\(Pf=E_{\theta_0}f(X)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_n=\sqrt n(\mathbb P_n-P)\)</span>{% endraw %}.</p>
<div class="proposition" data-note-kind="Proposition" data-note-number="4" id="result-4">
<p><strong>Proposition 4.</strong> Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. from {% raw %}<span class="math inline">\(P_{\theta_0}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} is interior, the model is QMD there, and {% raw %}<span class="math inline">\(I=I(\theta_0)\)</span>{% endraw %} is nonsingular. Outside one fixed {% raw %}<span class="math inline">\(P_{\theta_0}\)</span>{% endraw %}-null set, assume the log densities are finite on a neighborhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} and satisfy</p>


{% raw %}<div class="math display">\[|\log p_{\theta_1}(x)-\log p_{\theta_2}(x)|\le M(x)\|\theta_1-\theta_2\|,\qquad P_{\theta_0}M^2&lt;\infty.\]</div>{% endraw %}

<p>Let {% raw %}<span class="math inline">\(\hat\theta_n\xrightarrow{P}\theta_0\)</span>{% endraw %} be measurable approximate likelihood maximizers satisfying</p>

{% raw %}<div class="math display">\[\mathbb P_n\log p_{\hat\theta_n}\ge\sup_{\theta\in U}\mathbb P_n\log p_\theta-o_P(n^{-1}).\]</div>{% endraw %}

<p>Likelihood contrasts may be used if individual log-density integrals do not exist. Then</p>

{% raw %}<div class="math display">\[\sqrt n(\hat\theta_n-\theta_0)=I^{-1}\frac1{\sqrt n}\sum_{i=1}^n\dot\ell_{\theta_0}(X_i)+o_P(1)\Rightarrow \mathcal{N}_d(0,I^{-1}).\]</div>{% endraw %}
</div>
<div class="proof">
<p>Proof. Write {% raw %}<span class="math inline">\(P=P_{\theta_0}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(m_\theta=\log p_\theta-\log p_{\theta_0}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\Delta_n=\mathbb G_n\dot\ell_{\theta_0}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_n=\sqrt n(\mathbb P_n-P)\)</span>{% endraw %}. QMD and the scalar logarithm expansion show, for every deterministic {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[a_n:=\sqrt n\,m_{\theta_0+h_n/\sqrt n}\xrightarrow{P} h^\top\dot\ell_{\theta_0}\quad\text{in }P\text{-probability}.\]</div>{% endraw %}

<p>Indeed the square-root ratio satisfies {% raw %}<span class="math inline">\(\sqrt n\,2(\sqrt{p_{\theta_0+h_n/\sqrt n}/p_{\theta_0}}-1)\to h^\top\dot\ell_{\theta_0}\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(2\log(1+w/2)=w+O(w^2)\)</span>{% endraw %} near zero. The Lipschitz bound gives {% raw %}<span class="math inline">\(|a_n|\le M\sup_n\|h_n\|\)</span>{% endraw %}. This square-integrable envelope upgrades convergence in probability to {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[\operatorname{Var}\{\mathbb G_n(a_n-h^\top\dot\ell_{\theta_0})\}\le P(a_n-h^\top\dot\ell_{\theta_0})^2\to0.\]</div>{% endraw %}

<p>The LAN expansion, proved in the linked contiguity note, and the decomposition {% raw %}<span class="math inline">\(n\mathbb P_nm_{\theta_0+h_n/\sqrt n}=\mathbb G_na_n+nPm_{\theta_0+h_n/\sqrt n}\)</span>{% endraw %}, then give</p>

{% raw %}<div class="math display">\[nPm_{\theta_0+h_n/\sqrt n}\to-\frac12h^\top Ih.\]</div>{% endraw %}

<p>The limit of {% raw %}<span class="math inline">\(nPm_{\theta_0+h_n/\sqrt n}\)</span>{% endraw %} along every convergent local direction yields the second-order population expansion {% raw %}<span class="math inline">\(Pm_{\theta_0+v}=-v^\top Iv/2+o(\|v\|^2)\)</span>{% endraw %}: for any sequence {% raw %}<span class="math inline">\(v\to0\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(n\)</span>{% endraw %} of order {% raw %}<span class="math inline">\(\|v\|^{-2}\)</span>{% endraw %} and extract a convergent subsequence of its normalized directions. The preceding limit applies to each such subsequence.</p>
<p>Appendix A proves both required empirical-process statements under the square-integrable Lipschitz envelope: {% raw %}<span class="math inline">\(\widehat h_n=\sqrt n(\widehat\theta_n-\theta_0)=O_P(1)\)</span>{% endraw %}, and, for every fixed {% raw %}<span class="math inline">\(K&lt;\infty\)</span>{% endraw %}, {% raw %}<span class="math display">\[
\sup_{\|h\|\le K}\left|n\mathbb P_nm_{\theta_0+h/\sqrt n}-h^\top\Delta_n+\frac12h^\top Ih\right|\xrightarrow{P}0.
\]</span>{% endraw %} Tightness then permits {% raw %}<span class="math inline">\(h\)</span>{% endraw %} to be replaced by any random {% raw %}<span class="math inline">\(H_n=O_P(1)\)</span>{% endraw %}.</p>


{% raw %}{% endraw %}

<p>The quadratic criterion is maximized at {% raw %}<span class="math inline">\(h_n^*=I^{-1}\Delta_n=O_P(1)\)</span>{% endraw %}. Both {% raw %}<span class="math inline">\(\widehat\theta_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\theta_0+h_n^*/\sqrt n\)</span>{% endraw %} lie in {% raw %}<span class="math inline">\(U\)</span>{% endraw %} with probability tending to one. Substituting these two random directions into the uniform expansion and using approximate maximization gives</p>


{% raw %}<div class="math display">\[\frac12(\hat h_n-h_n^*)^\top I(\hat h_n-h_n^*)\le o_P(1).\]</div>{% endraw %}

<p>Positive definiteness forces {% raw %}<span class="math inline">\(\hat h_n-h_n^*\xrightarrow{P}0\)</span>{% endraw %}. Lemma 1 and the multivariate CLT give {% raw %}<span class="math inline">\(\Delta_n\Rightarrow \mathcal{N}_d(0,I)\)</span>{% endraw %}, yielding the assertion. Consistency alone would not suffice: in the normal mean model, {% raw %}<span class="math inline">\(\bar X_n+n^{-1/4}\)</span>{% endraw %} is consistent but has a diverging root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} error. ◻</p>
</div>
<p>Sources for the theorems used above: <a href="https://doi.org/10.1017/CBO9780511802256.006">van der Vaart, <em>Asymptotic Statistics</em>, Theorems 5.23 and 5.39, pp. 53–54 and 65–66</a>; the square-root sufficient condition is <a href="https://doi.org/10.1017/CBO9780511802256.008">Lemma 7.6, pp. 95–96</a>.</p>
<h2 id="qmd-technical-appendix">Appendix A. Rate and uniform remainder</h2>
<p>The arguments below use measurable suprema. The Lipschitz condition makes each parameter-indexed sample path continuous, so a countable dense subset has the same supremum on every compact parameter ball.</p>
<div class="lemma" id="qmd-lipschitz-maximal">
<p><strong>Lemma (A finite-dimensional Lipschitz bound).</strong> Let {% raw %}<span class="math inline">\(f_t\)</span>{% endraw %}, {% raw %}<span class="math inline">\(t\in B(0,R)\subset\mathbb R^d\)</span>{% endraw %}, be measurable, with {% raw %}<span class="math inline">\(f_0=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|f_t-f_s|\le L\|t-s\|\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(PL^2&lt;\infty\)</span>{% endraw %}. Then {% raw %}<span class="math display">\[
E\sup_{\|t\|\le R}|\mathbb G_nf_t|\le C_d R\|L\|_{P,2}.
\]</span>{% endraw %} For {% raw %}<span class="math inline">\(0&lt;\delta\le R\)</span>{% endraw %}, the same class satisfies {% raw %}<span class="math display">\[
E\sup_{\substack{s,t\in B(0,R)\\\|t-s\|\le\delta}}
|\mathbb G_n(f_t-f_s)|
\le C_d\|L\|_{P,2}\,\delta\sqrt{1+\log(R/\delta)}.
\]</span>{% endraw %}</p>
</div>
<p><em>Proof.</em> Introduce independent uniform signs {% raw %}<span class="math inline">\(\varepsilon_i\)</span>{% endraw %}. Symmetrization bounds each expected centered supremum by twice the corresponding supremum of {% raw %}<span class="math inline">\(n^{-1/2}\sum_i\varepsilon_i f_t(X_i)\)</span>{% endraw %}. Conditional on the sample, its increments satisfy {% raw %}<span class="math display">\[
E_\varepsilon\exp\!\left\{\lambda n^{-1/2}\sum_i\varepsilon_i(f_t-f_s)(X_i)\right\}
\le\exp\!\left\{\frac{\lambda^2}{2}\mathbb P_nL^2\|t-s\|^2\right\},
\]</span>{% endraw %} because {% raw %}<span class="math inline">\(\cosh u\le e^{u^2/2}\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(N\)</span>{% endraw %} such increments with variance bound {% raw %}<span class="math inline">\(v^2\)</span>{% endraw %}, the log-sum-exp inequality over both signs gives an expected maximum at most {% raw %}<span class="math inline">\(v\sqrt{2\log(2N)}\)</span>{% endraw %}.</p>
<p>Cover the ball by Euclidean nets of mesh {% raw %}<span class="math inline">\(2^{-j}R\)</span>{% endraw %}, with at most {% raw %}<span class="math inline">\((C2^j)^d\)</span>{% endraw %} points. Join each point to a nearest point in the preceding net. The expected contribution at level {% raw %}<span class="math inline">\(j\)</span>{% endraw %} is bounded by {% raw %}<span class="math inline">\(C_d\sqrt{\mathbb P_nL^2}\,R2^{-j}\sqrt{j+1}\)</span>{% endraw %}. The series converges. The sample paths are Lipschitz, so the telescoping sums converge to the process at every index; taking expectations and using {% raw %}<span class="math inline">\(E\sqrt{\mathbb P_nL^2}\le\|L\|_{P,2}\)</span>{% endraw %} proves the first bound.</p>
<p>For the modulus, start at a net of mesh at most {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}. Two points at distance at most {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} have nearest net points at distance at most {% raw %}<span class="math inline">\(3\delta\)</span>{% endraw %}. There are at most {% raw %}<span class="math inline">\((CR/\delta)^{2d}\)</span>{% endraw %} such pairs. The finite-maximum bound controls this initial difference by {% raw %}<span class="math inline">\(C_d\sqrt{\mathbb P_nL^2}\,\delta\sqrt{1+\log(R/\delta)}\)</span>{% endraw %}. The finer chains have total bound {% raw %}<span class="math display">\[
C_d\sqrt{\mathbb P_nL^2}\sum_{j\ge0}2^{-j}\delta
\sqrt{1+\log(R/\delta)+j},
\]</span>{% endraw %} which has the same order. Symmetrization and the expectation bound complete the proof. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<div class="lemma" id="qmd-root-n-rate">
<p><strong>Lemma (Rate from quadratic separation).</strong> Under Proposition 4, a consistent approximate maximizer satisfies {% raw %}<span class="math inline">\(\sqrt n\|\widehat\theta_n-\theta_0\|=O_P(1)\)</span>{% endraw %}.</p>
</div>
<p><em>Proof.</em> The population expansion proved in the main text and positive definiteness of {% raw %}<span class="math inline">\(I\)</span>{% endraw %} give constants {% raw %}<span class="math inline">\(c,\delta_0&gt;0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(Pm_\theta\le-c\|\theta-\theta_0\|^2\)</span>{% endraw %} for {% raw %}<span class="math inline">\(\|\theta-\theta_0\|\le\delta_0\)</span>{% endraw %}. The preceding lemma gives {% raw %}<span class="math display">\[
E\sup_{\|\theta-\theta_0\|\le\delta}|\mathbb G_nm_\theta|
\le C\delta,
\]</span>{% endraw %} for balls in the Lipschitz neighborhood. Let {% raw %}<span class="math inline">\(a_n\ge0\)</span>{% endraw %} be the optimization error in the averaged criterion, with {% raw %}<span class="math inline">\(na_n=o_P(1)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(m_{\theta_0}=0\)</span>{% endraw %}, approximate maximization implies {% raw %}<span class="math inline">\(\mathbb P_nm_{\widehat\theta_n}\ge-a_n\)</span>{% endraw %}.</p>
<p>On a shell {% raw %}<span class="math inline">\(r_j&lt;\|\widehat\theta_n-\theta_0\|\le2r_j\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(r_j=2^jK/\sqrt n\)</span>{% endraw %}, and on {% raw %}<span class="math inline">\(na_n\le cK^2/2\)</span>{% endraw %}, the empirical fluctuation must satisfy {% raw %}<span class="math display">\[
\sup_{\|\theta-\theta_0\|\le2r_j}|\mathbb G_nm_\theta|
\ge\frac c2\sqrt n\,r_j^2.
\]</span>{% endraw %} Markov’s inequality bounds this probability by {% raw %}<span class="math inline">\(C/(2^jK)\)</span>{% endraw %}. Sum over the shells inside a sufficiently small fixed neighborhood. The remaining event has probability tending to zero by consistency. Therefore {% raw %}<span class="math display">\[
\limsup_nP(\sqrt n\|\widehat\theta_n-\theta_0\|&gt;K)\le C/K.
\]</span>{% endraw %} Let {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<div class="lemma" id="qmd-uniform-remainder">
<p><strong>Lemma (Uniform local remainder).</strong> Under Proposition 4, the likelihood expansion holds uniformly on every fixed ball of local directions.</p>
</div>
<p><em>Proof.</em> Put {% raw %}<span class="math display">\[
r_{n,h}=\sqrt n\,m_{\theta_0+h/\sqrt n}-h^\top\dot\ell_{\theta_0}.
\]</span>{% endraw %} The QMD and logarithm calculation in the main text gives {% raw %}<span class="math inline">\(\|r_{n,h}\|_{P,2}\to0\)</span>{% endraw %} for each fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\mathbb G_nr_{n,h}\xrightarrow{P}0\)</span>{% endraw %} by its variance bound. Moreover, {% raw %}<span class="math display">\[
|r_{n,h}-r_{n,k}|\le(M+\|\dot\ell_{\theta_0}\|)\|h-k\|.
\]</span>{% endraw %} The envelope is square integrable. Apply the modulus bound on a fixed ball, approximate it by a finite {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}-net, take {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, and then {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}. This gives {% raw %}<span class="math inline">\(\sup_{\|h\|\le K}|\mathbb G_nr_{n,h}|\xrightarrow{P}0\)</span>{% endraw %}. The population expansion gives {% raw %}<span class="math display">\[
\sup_{\|h\|\le K}\left|nPm_{\theta_0+h/\sqrt n}+\frac12h^\top Ih\right|\to0.
\]</span>{% endraw %} Combining the centered and population terms proves the assertion. For {% raw %}<span class="math inline">\(H_n=O_P(1)\)</span>{% endraw %}, restrict first to {% raw %}<span class="math inline">\(\|H_n\|\le K\)</span>{% endraw %} and then let {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>The rate proof uses quadratic population separation, the Lipschitz maximal bound, and optimization error {% raw %}<span class="math inline">\(o_P(n^{-1})\)</span>{% endraw %} in the averaged criterion.</p>

<nav aria-label="Notes in this series" class="note-series"><p>Next: <a href="{% post_url 2022-04-16-asymptotic-power-relative-efficiency-and-optimal-tests %}">Asymptotic Power, Relative Efficiency, and Optimal Tests</a></p></nav>
</div>
