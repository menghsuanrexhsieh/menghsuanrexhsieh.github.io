---
layout: "post"
title: "Quadratic Mean Differentiability"
date: "2022-04-13"
tags: ["statistics", "asymptotic theory"]
excerpt: "Verifying qmd is usually not straightforward, but here is a sufficient condition for verifying if a family of parametric models is qmd."
note_series: "Asymptotic testing"
note_source: "assets/notes/Overleaf Projects (32 items)/Invariant Tests and Quadratic Mean Differentiability/stats.tex"
redirect_from: ["/2023/04/08/quadratic-mean-differentiability/"]
---

<div class="note-content" markdown="0">

<p>In a smooth model, nearby parameter values produce a likelihood ratio with a linear random term and a quadratic drift. Ordinary Taylor expansion suggests this form but may not control the summed remainder. Quadratic-mean differentiability replaces pointwise differentiability of the log density by an integrated expansion of its square root. We begin with normal and exponential-family calculations to identify what this condition must accomplish.</p>

<p>Quadratic-mean differentiability controls an integrated expansion of square-root densities. The <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}#08-0-qmd-to-lan">contiguity note</a> proves how this condition produces local asymptotic normality, including the score mean, support changes, and the likelihood remainder. Its <a href="{% post_url 2022-01-09-contiguity-change-of-measure-and-m-estimation %}#08-0-calculate-the-gaussian-mean-shift">third-lemma calculation</a> then gives the distribution of a statistic under local alternatives.</p>

<div id="quadratic-mean-differentiability" data-note-section="title">

</div>
<p>For the ensuing discussion, let {% raw %}<span class="math inline">\(\Theta \subset \mathbb R^d\)</span>{% endraw %} be an open subset. Consider a family of parametric models {% raw %}<span class="math inline">\(\mathcal P = \{P_\theta : \theta \in \Theta\}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(P_\theta\)</span>{% endraw %} is defined on a (measurable) sample space {% raw %}<span class="math inline">\((\mathcal X, \mathscr A)\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(P_\theta\)</span>{% endraw %} is absolutely continuous with respect to a {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-finite measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, i.e. we define {% raw %}<span class="math inline">\(p_\theta (x) = \frac{\dif P_\theta (x)}{\dif \mu(x)}\)</span>{% endraw %}. We want to specifically look at <em>smooth</em> parametric family.</p>

<p>For testing a simple null {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} against {% raw %}<span class="math inline">\(\theta_1\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(\mathcal L_N(\theta)=\prod_{i=1}^Np_\theta(X_i)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\Lambda_N=\log\{\mathcal L_N(\theta_1)/\mathcal L_N(\theta_0)\}\)</span>{% endraw %}. The Neyman–Pearson test rejects for large {% raw %}<span class="math inline">\(\Lambda_N\)</span>{% endraw %}, with boundary randomization when needed to attain its level.</p>

<p>In the normal location model with known {% raw %}<span class="math inline">\(\sigma^2&gt;0\)</span>{% endraw %}, the constants in the density cancel, and summing the individual squared differences gives</p>

{% raw %}<div class="math display">\[\begin{aligned}\Lambda_N&amp;=\frac1{2\sigma^2}\sum_{i=1}^N\{(X_i-\theta_0)^2-(X_i-\theta_1)^2\}\\&amp;=\frac N{\sigma^2}\left\{(\theta_1-\theta_0)\bar X_N-\frac{\theta_1^2-\theta_0^2}{2}\right\}.\end{aligned}\]</div>{% endraw %}

<p>For a fixed {% raw %}<span class="math inline">\(\theta_1\ne\theta_0\)</span>{% endraw %}, the LLN under {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\Lambda_N/N\to_P-(\theta_1-\theta_0)^2/(2\sigma^2)\)</span>{% endraw %}; thus {% raw %}<span class="math inline">\(\Lambda_N\to_P-\infty\)</span>{% endraw %}. Fixed alternatives become distinguishable, whereas alternatives at distance {% raw %}<span class="math inline">\(N^{-1/2}\)</span>{% endraw %} produce a nondegenerate local problem.</p>

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
<p>The examples suggest a general question: which integrated smoothness condition guarantees a second-order likelihood expansion? Formally, we seek </p>

{% raw %}<div class="math display">\[\begin{aligned}
    p_{\theta_0 + h} (x) - p_{\theta_0} (x) - \langle \dot p_{\theta_0} (x), h \rangle = o(|h|) ~\text{as } |h| \to 0 ~.
\end{aligned}\]</div>{% endraw %}
<p> It suffices to control square-root densities in the quadratic norm. Squaring the approximation recovers information about density normalization, while the quadratic norm controls the remainder. To that end, define </p>

{% raw %}<div class="math display">\[\begin{aligned}
    R(x,h; \theta_0) \triangleq \sqrt{p_{\theta_0 + h}(x)} - \sqrt{p_{\theta_0}(x)} - \langle \eta(x,\theta_0), h \rangle ~.
\end{aligned}\]</div>{% endraw %}
<p> Here, {% raw %}<span class="math inline">\(\eta(\cdot, \theta)\)</span>{% endraw %} is understood as a {% raw %}<span class="math inline">\(d\)</span>{% endraw %}-dimensional vector of real-valued functions. The remainder measures the error in approximating the square-root density by its linear part. The broad heuristic is it is enough to look at the {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} norm of this “remainder”, and require that it be “small” as we scale the alternative hypothesis {% raw %}<span class="math inline">\(h\)</span>{% endraw %}.</p>

<p>By the heuristic above, a parametric family {% raw %}<span class="math inline">\(\mathcal P = \{ P_\theta : \theta \in \Theta \}\)</span>{% endraw %} is said to be <em>quadratic mean differentiable</em> (<em>qmd</em>) at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} if there exists a vector of real-valued functions, {% raw %}<span class="math inline">\(\eta(\cdot, \theta) = (\eta_1(\cdot, \theta), \dots, \eta_d(\cdot,\theta))^\top\)</span>{% endraw %}, such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \int_{\mathcal X} \left( \sqrt{p_{\theta_0 + h}(x)} - \sqrt{p_{\theta_0}(x)} - \langle \eta(x,\theta_0), h \rangle \right)^2 \dif \mu(x) = o(|h|^2) 
\end{aligned}\]</div>{% endraw %}
<p> for the fixed dominating measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, as {% raw %}<span class="math inline">\(|h| \to 0\)</span>{% endraw %}. This definition is particularly useful because of the following result.</p>

<div id="result-1" class="lemma" data-note-number="1" data-note-kind="Lemma">
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
<div id="result-2" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p>Lemma 2. For every {% raw %}<span class="math inline">\(h\in\mathbb R^d\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\int|h^\top\eta(x,\theta_0)|^2\,d\mu(x)=\frac14h^\top I(\theta_0)h.\]</div>{% endraw %}
</div>
<div class="proof">
<p>Proof. Expand the square as {% raw %}<span class="math inline">\(\sum_{i=1}^d\sum_{j=1}^d h_ih_j\eta_i\eta_j\)</span>{% endraw %}. Each product is integrable by Cauchy–Schwarz, so finite summation and integration commute. The {% raw %}<span class="math inline">\((i,j)\)</span>{% endraw %}-entry of the integral is {% raw %}<span class="math inline">\(I_{ij}/4\)</span>{% endraw %}, giving the identity. In particular the information matrix is symmetric and nonnegative definite; invertibility, when used later, makes it positive definite. ◻</p>
</div>
<p>Here is a sufficient condition that works in every finite parameter dimension. The differentiability assumption refers to square-root densities, including points where a density vanishes.</p>
<div id="result-3" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p>Theorem 3. Suppose, outside one fixed {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}-null set, {% raw %}<span class="math inline">\(\theta\mapsto s_\theta(x)=\sqrt{p_\theta(x)}\)</span>{% endraw %} is continuously differentiable on a neighborhood of {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, with gradient {% raw %}<span class="math inline">\(\eta(x,\theta)\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(I(\theta)=4\int\eta(x,\theta)\eta(x,\theta)^\top\,d\mu\)</span>{% endraw %} is finite nearby and continuous at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}. Then the model is QMD at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, with derivative {% raw %}<span class="math inline">\(\eta(\cdot,\theta_0)\)</span>{% endraw %}.</p>

<p>At points with positive density, {% raw %}<span class="math inline">\(\eta=\nabla p_\theta/(2\sqrt{p_\theta})\)</span>{% endraw %}; at points with zero density, {% raw %}<span class="math inline">\(\eta=0\)</span>{% endraw %}, since the differentiable nonnegative function {% raw %}<span class="math inline">\(s_\theta(x)\)</span>{% endraw %} has a local minimum.</p>
</div>
<div class="proof">
<p>Proof. First the gradients are continuous in {% raw %}<span class="math inline">\(L^2(\mu;\mathbb R^d)\)</span>{% endraw %}. For any {% raw %}<span class="math inline">\(\theta_n\to\theta_0\)</span>{% endraw %}, pointwise continuity gives {% raw %}<span class="math inline">\(\eta_n\to\eta_0\)</span>{% endraw %}, and continuity of the trace of {% raw %}<span class="math inline">\(I\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\int\|\eta_n\|^2\to\int\|\eta_0\|^2\)</span>{% endraw %}. Scheffé's argument applied to these nonnegative squared norms gives their {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %} convergence: write the absolute difference as their sum minus twice their minimum, and use dominated convergence for the minimum. Now {% raw %}<span class="math inline">\(\|\eta_n-\eta_0\|^2\to0\)</span>{% endraw %} pointwise and is bounded by {% raw %}<span class="math inline">\(2\|\eta_n\|^2+2\|\eta_0\|^2\)</span>{% endraw %}, which converges in {% raw %}<span class="math inline">\(L^1\)</span>{% endraw %}. The generalized dominated-convergence argument gives {% raw %}<span class="math inline">\(\|\eta_n-\eta_0\|_2\to0\)</span>{% endraw %}. To see that last argument directly, subtract the integrand from its nonnegative majorant and apply Fatou; the convergent integrals of the majorants force the limsup of the smaller integrals to be zero.</p>

<p>Choose {% raw %}<span class="math inline">\(h\)</span>{% endraw %} so the entire segment {% raw %}<span class="math inline">\(\theta_0+th\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0\le t\le1\)</span>{% endraw %}, stays in the neighborhood. The fundamental theorem of calculus gives</p>

{% raw %}<div class="math display">\[s_{\theta_0+h}-s_{\theta_0}-h^\top\eta_0=\int_0^1 h^\top(\eta_{\theta_0+th}-\eta_0)\,dt.\]</div>{% endraw %}

<p>Jensen, Cauchy–Schwarz, and Tonelli imply</p>

{% raw %}<div class="math display">\[\|s_{\theta_0+h}-s_{\theta_0}-h^\top\eta_0\|_2^2\le\|h\|^2\int_0^1\|\eta_{\theta_0+th}-\eta_0\|_2^2\,dt\le\|h\|^2\sup_{\|v\|\le\|h\|}\|\eta_{\theta_0+v}-\eta_0\|_2^2=o(\|h\|^2).\]</div>{% endraw %}

<p>This is exactly QMD. The result is the sufficient condition of van der Vaart, Lemma 7.6; the argument above explicitly supplies the multivariate segment and integrated convergence. ◻</p>
</div>
<div id="result-4" class="proposition" data-note-number="4" data-note-kind="Proposition">
<p>Proposition 4. Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be iid from {% raw %}<span class="math inline">\(P_{\theta_0}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} is interior, the model is QMD there, and {% raw %}<span class="math inline">\(I=I(\theta_0)\)</span>{% endraw %} is nonsingular. Assume on a fixed neighborhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} that the log densities are finite {% raw %}<span class="math inline">\(P_{\theta_0}\)</span>{% endraw %}-almost surely and</p>

{% raw %}<div class="math display">\[|\log p_{\theta_1}(x)-\log p_{\theta_2}(x)|\le M(x)\|\theta_1-\theta_2\|,\qquad P_{\theta_0}M^2&lt;\infty.\]</div>{% endraw %}

<p>Let {% raw %}<span class="math inline">\(\hat\theta_n\to_P\theta_0\)</span>{% endraw %} be measurable approximate likelihood maximizers satisfying</p>

{% raw %}<div class="math display">\[P_n\log p_{\hat\theta_n}\ge\sup_{\theta\in U}P_n\log p_\theta-o_P(n^{-1}).\]</div>{% endraw %}

<p>Likelihood contrasts may be used if individual log-density integrals do not exist. Then</p>

{% raw %}<div class="math display">\[\sqrt n(\hat\theta_n-\theta_0)=I^{-1}\frac1{\sqrt n}\sum_{i=1}^n\dot\ell_{\theta_0}(X_i)+o_P(1)\Rightarrow N_d(0,I^{-1}).\]</div>{% endraw %}
</div>
<div class="proof">
<p>Proof. Write {% raw %}<span class="math inline">\(P=P_{\theta_0}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(m_\theta=\log p_\theta-\log p_{\theta_0}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\Delta_n=\mathbb G_n\dot\ell_{\theta_0}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_n=\sqrt n(P_n-P)\)</span>{% endraw %}. QMD and the scalar logarithm expansion show, for every deterministic {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[a_n:=\sqrt n\,m_{\theta_0+h_n/\sqrt n}\to h^\top\dot\ell_{\theta_0}\quad\text{in }P\text{-probability}.\]</div>{% endraw %}

<p>Indeed the square-root ratio satisfies {% raw %}<span class="math inline">\(\sqrt n\,2(\sqrt{p_{\theta_0+h_n/\sqrt n}/p_{\theta_0}}-1)\to h^\top\dot\ell_{\theta_0}\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(2\log(1+w/2)=w+O(w^2)\)</span>{% endraw %} near zero. The Lipschitz bound gives {% raw %}<span class="math inline">\(|a_n|\le M\sup_n\|h_n\|\)</span>{% endraw %}. This square-integrable envelope upgrades convergence in probability to {% raw %}<span class="math inline">\(L^2(P)\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[\operatorname{Var}\{\mathbb G_n(a_n-h^\top\dot\ell_{\theta_0})\}\le P(a_n-h^\top\dot\ell_{\theta_0})^2\to0.\]</div>{% endraw %}

<p>The LAN expansion, proved in the linked contiguity note, and the decomposition {% raw %}<span class="math inline">\(nP_nm_{\theta_0+h_n/\sqrt n}=\mathbb G_na_n+nPm_{\theta_0+h_n/\sqrt n}\)</span>{% endraw %}, then give</p>

{% raw %}<div class="math display">\[nPm_{\theta_0+h_n/\sqrt n}\to-\frac12h^\top Ih.\]</div>{% endraw %}

<p>These deterministic sequential limits yield the second-order population expansion {% raw %}<span class="math inline">\(Pm_{\theta_0+v}=-v^\top Iv/2+o(\|v\|^2)\)</span>{% endraw %}: for any sequence {% raw %}<span class="math inline">\(v\to0\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(n\)</span>{% endraw %} of order {% raw %}<span class="math inline">\(\|v\|^{-2}\)</span>{% endraw %} and extract a convergent subsequence of its normalized directions. The preceding limit applies to each such subsequence.</p>

<p>Two empirical-process steps are needed before substituting the random fitted direction: root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} boundedness of a consistent approximate maximizer, and stochastic equicontinuity of the local remainder under the square-integrable Lipschitz envelope. These are the explicit inputs of van der Vaart, Theorem 5.23 (including its differentiability-in-probability footnote), used in the proof of Theorem 5.39. They give {% raw %}<span class="math inline">\(\hat h_n=\sqrt n(\hat\theta_n-\theta_0)=O_P(1)\)</span>{% endraw %} and, for every {% raw %}<span class="math inline">\(H_n=O_P(1)\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[nP_nm_{\theta_0+H_n/\sqrt n}=H_n^\top\Delta_n-\frac12H_n^\top IH_n+o_P(1).\]</div>{% endraw %}

<p>We retain those two rate/equicontinuity results as cited theorem inputs. The final optimization step is elementary: the quadratic on the right is maximized at {% raw %}<span class="math inline">\(h_n^*=I^{-1}\Delta_n=O_P(1)\)</span>{% endraw %}. Both {% raw %}<span class="math inline">\(\hat\theta_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\theta_0+h_n^*/\sqrt n\)</span>{% endraw %} lie in {% raw %}<span class="math inline">\(U\)</span>{% endraw %} with probability tending to one. Approximate likelihood maximization and completion of the square give</p>

{% raw %}<div class="math display">\[\frac12(\hat h_n-h_n^*)^\top I(\hat h_n-h_n^*)\le o_P(1).\]</div>{% endraw %}

<p>Positive definiteness forces {% raw %}<span class="math inline">\(\hat h_n-h_n^*\to_P0\)</span>{% endraw %}. Lemma 1 and the multivariate CLT give {% raw %}<span class="math inline">\(\Delta_n\Rightarrow N_d(0,I)\)</span>{% endraw %}, yielding the assertion. Consistency alone would not suffice: in the normal mean model, {% raw %}<span class="math inline">\(\bar X_n+n^{-1/4}\)</span>{% endraw %} is consistent but has a diverging root-{% raw %}<span class="math inline">\(n\)</span>{% endraw %} error. ◻</p>
</div>
<p>Source for the explicit theorem inputs: <a href="https://doi.org/10.1017/CBO9780511802256.006">van der Vaart, <em>Asymptotic Statistics</em>, Theorems 5.23 and 5.39, pp. 53–54 and 65–66</a>; the square-root sufficient condition is <a href="https://doi.org/10.1017/CBO9780511802256.008">Lemma 7.6, pp. 95–96</a>.</p>
<nav class="note-series" aria-label="Notes in this series"><p>Next: <a href="{% post_url 2022-04-16-asymptotic-power-relative-efficiency-and-optimal-tests %}">Asymptotic Power, Relative Efficiency, and Optimal Tests</a></p></nav>

</div>
