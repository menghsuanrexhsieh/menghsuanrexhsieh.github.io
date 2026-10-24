---
layout: "post"
title: "Subsampling"
date: "2022-11-04"
tags: ["statistics", "resampling"]
excerpt: "Subsampling. Notes on bootstrap and subsampling."
note_series: "Bootstrap and subsampling"
note_source: "assets/notes/Overleaf Projects (32 items)/Bootstrapping, Subsampling/stats.tex"
redirect_from: ["/2023/06/10/subsampling/"]
---

<div class="note-content" markdown="0">

<p>Write {% raw %}<span class="math inline">\(P_F\)</span>{% endraw %} for probability under the data-generating distribution {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\widehat F_n\)</span>{% endraw %} for the empirical distribution, and {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} for the root whose distribution is being approximated. Bootstrap probabilities condition on the observed sample. The <a href="{% post_url 2022-08-03-bootstrap-distributions-and-consistency %}">setup and conditional convergence conventions</a> fix the distinction between these two sources of randomness.</p>

<div id="subsampling" data-note-section="title">

</div>
<p>Subsampling approximates a sampling distribution by recomputing the statistic on smaller subsets of the observations. Its justification starts from a limit law for the statistic at the true population, so it can apply even when replacing that population by the empirical distribution is difficult to justify. For example, in the case where the data are {% raw %}<span class="math inline">\(n\)</span>{% endraw %} observations which are independent and identically distributed, a statistic {% raw %}<span class="math inline">\(\hat \theta_n\)</span>{% endraw %} is computed based on the entire data set and is recomputed over all {% raw %}<span class="math inline">\(\binom{n}{m}\)</span>{% endraw %} data sets of size {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. The same estimation rule must be defined at both sample sizes {% raw %}<span class="math inline">\(n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(m\)</span>{% endraw %}. These recomputed values of the statistic are suitably normalized to approximate the true sampling distribution. The consistency theorem below requires a limiting distribution and a separation between the full-sample and subsample scales. The bootstrap, on the other hand, requires that the distribution of the statistic is somehow locally smooth as a function of the unknown model. In contrast, no such assumption is required in the theory for subsampling. However, when both subsampling and the bootstrap are consistent, the bootstrap is typically more accurate.</p>

<p>Begin with independent observations and a real-valued parameter. Let {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} be a sample of {% raw %}<span class="math inline">\(n\)</span>{% endraw %} i.i.d. random variables taking values in an arbitrary sample space {% raw %}<span class="math inline">\(\mathcal S\)</span>{% endraw %}. The common probability measure generating the observations is denoted by {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. The goal is to construct a confidence region for some parameter {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %}. For now, assume {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} is real-valued, but this can and will be generalized to allow for the construction of confidence regions for multivariate parameters or confidence bands for functions. Let {% raw %}<span class="math inline">\(\hat \theta_n = \hat \theta_n (X_1, \dots, X_n)\)</span>{% endraw %} denote an estimator for {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %}. Let </p>

{% raw %}<div class="math display">\[\begin{aligned}
    R_n(X^n, \theta(P)) = \tau_n (\hat \theta_n - \theta(P))
\end{aligned}\]</div>{% endraw %}
<p> denote the root of interest, and let {% raw %}<span class="math inline">\(J_n(P)\)</span>{% endraw %} denote the sampling distribution of the root based on the sample {% raw %}<span class="math inline">\(X^n = (X_1, \dots, X_n)\)</span>{% endraw %} from {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\tau_n\)</span>{% endraw %} is known, does not depend on {% raw %}<span class="math inline">\(P\)</span>{% endraw %}, and is a normalizing constant. As before, the cumulative distribution function of {% raw %}<span class="math inline">\(J_n(P)\)</span>{% endraw %} is defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    J_n (x,P) = P( \tau_n (\hat \theta_n - \theta(P)) \leq x ) ~.
\end{aligned}\]</div>{% endraw %}
<p>The first requirement is a limit for the normalized estimation error. This is the distribution that the subsample calculation will estimate when constructing confidence intervals for {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %}.</p>

<div id="as:subsampling" class="assumption" data-note-number="1" data-note-kind="Assumption">
<p><strong>Assumption 1</strong>.  There exists a limiting distribution {% raw %}<span class="math inline">\(J(P)\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(J_n (P) \rightsquigarrow J(P)\)</span>{% endraw %} as {% raw %}<span class="math inline">\(n \to \infty\)</span>{% endraw %} (for some sequence {% raw %}<span class="math inline">\(\tau_n\)</span>{% endraw %}).</p>

</div>
<p>The subsample statistic is centered at the full-sample estimate, since the population parameter is unknown. The scale condition below will make the error from this centering negligible.</p>

<div id="algorithm-1" class="algorithm" data-note-number="2" data-note-kind="Algorithm">
<p><strong>Algorithm 2. Subsampling procedure</strong></p>

<ol>
<li><p>Take all {% raw %}<span class="math inline">\(N_n=\binom{n}{m}\)</span>{% endraw %} subsets of size {% raw %}<span class="math inline">\(m\)</span>{% endraw %}, and order these subsets in any way desired. Call them {% raw %}<span class="math inline">\(Y_1, \dots, Y_{N_n}\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(\frac{m}{n} \to 0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(m, n \to \infty\)</span>{% endraw %}.</p>

<p>Define the approximation to {% raw %}<span class="math inline">\(J_n(x,P)\)</span>{% endraw %} as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    K_{n,m} (x) = \frac{1}{N_n} \sum_{1 \leq i \leq N_n} \mathbb 1 \{ \tau_m (\hat \theta_{n,m,i} - \hat \theta_n) \leq x \} ~,
\end{aligned}\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(\hat \theta_{n,m,i}\)</span>{% endraw %} is the statistic {% raw %}<span class="math inline">\(\hat \theta_m\)</span>{% endraw %} evaluated using the subsample {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %}.</p></li>
</ol>
</div>
<p>Under this procedure, for any {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} is a random sample of {% raw %}<span class="math inline">\(m\)</span>{% endraw %} i.i.d. observations from {% raw %}<span class="math inline">\(P\)</span>{% endraw %}. Hence, the exact distribution of {% raw %}<span class="math inline">\(\tau_m (\hat \theta_{n,m,i} - \theta (P))\)</span>{% endraw %} is {% raw %}<span class="math inline">\(J_m (P)\)</span>{% endraw %}. We hope that the empirical distribution of the {% raw %}<span class="math inline">\(N_n\)</span>{% endraw %} values of this exact distribution serves as a good approximation to {% raw %}<span class="math inline">\(J_n (P)\)</span>{% endraw %}, under some assumptions. This leads us to the following consistency result for this approximation procedure.</p>

<div id="thm:subsampling-consistency" class="theorem" data-note-number="3" data-note-kind="Theorem">
<p><strong>Theorem 3</strong>. Assume the estimator is a measurable symmetric function of its observations and that the normalizing constants are positive. Assume {% raw %}<span class="math inline">\(\frac{m}{n} \to 0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\frac{\tau_m}{\tau_n} \to 0\)</span>{% endraw %} as {% raw %}<span class="math inline">\(m,n \to \infty\)</span>{% endraw %}. Furthermore, suppose Assumption <a href="#as:subsampling" data-reference-type="ref" data-reference="as:subsampling">1</a> holds. Then,</p>

<ol>
<li><p><span id="thm:subsampling-consistency-a" data-label="thm:subsampling-consistency-a"></span> if {% raw %}<span class="math inline">\(x\)</span>{% endraw %} is a continuity point of {% raw %}<span class="math inline">\(J(\cdot, P)\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(K_{n,m} (x) \xrightarrow{P} J(x,P)\)</span>{% endraw %} in probability.</p></li>
<li><p><span id="thm:subsampling-consistency-b" data-label="thm:subsampling-consistency-b"></span> if {% raw %}<span class="math inline">\(J(\cdot, P)\)</span>{% endraw %} is continuous, we have {% raw %}<span class="math inline">\(K_{n,m} (x)\)</span>{% endraw %} converges uniformly in probability to {% raw %}<span class="math inline">\(J_n(x,P)\)</span>{% endraw %}, i.e. </p>

{% raw %}<div class="math display">\[\begin{aligned}
            \sup_x |K_{n,m} (x) - J_n (x,P)| \xrightarrow{P} 0 ~.
        
\end{aligned}\]</div>{% endraw %}</li>
<li><p><span id="thm:subsampling-consistency-c" data-label="thm:subsampling-consistency-c"></span> Define </p>

{% raw %}<div class="math display">\[\begin{aligned}
            c_{n,m} (1-\alpha) &amp;\triangleq \inf \{ x : K_{n,m}(x) \geq 1-\alpha \} ~, \\
            c (1-\alpha, P) &amp;\triangleq \inf \{ x : J(x,P) \geq 1-\alpha \} ~.
        
\end{aligned}\]</div>{% endraw %}
<p> Suppose {% raw %}<span class="math inline">\(J(\cdot, P)\)</span>{% endraw %} is continuous (and strictly increasing) at {% raw %}<span class="math inline">\(c(1-\alpha,P)\)</span>{% endraw %}. Then, the asymptotic coverage probability under {% raw %}<span class="math inline">\(P\)</span>{% endraw %} of the confidence interval {% raw %}<span class="math inline">\([\hat \theta_n - \tau_n^{-1} c_{n,m} (1-\alpha), \infty)\)</span>{% endraw %} is the nominal level {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}, i.e. </p>

{% raw %}<div class="math display">\[\begin{aligned}
            P( \tau_n (\hat \theta_n - \theta(P)) \leq c_{n,m} (1-\alpha) ) \to 1-\alpha ~~ \text{ as } n \to \infty ~.
        
\end{aligned}\]</div>{% endraw %}</li>
</ol>
</div>
<div class="proof">
<p><em>Proof.</em> First center every subsample at the true parameter and write</p>
{% raw %}<div class="math display">\[U_n(x)=\binom nm^{-1}\sum_{|A|=m}\mathbf1\{\tau_m(\widehat\theta_m(X_A)-\theta(P))\le x\}.\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\Pi\)</span>{% endraw %} be a uniform random permutation independent of the data, put {% raw %}<span class="math inline">\(k=\lfloor n/m\rfloor\)</span>{% endraw %}, and form the average over its disjoint blocks,</p>
{% raw %}<div class="math display">\[V_n(x)=\frac1k\sum_{j=1}^k\mathbf1\{\tau_m(\widehat\theta_m(X_{\Pi(m(j-1)+1)},\ldots,X_{\Pi(mj)})-\theta(P))\le x\}.\]</div>{% endraw %}
<p>Each block is a uniform subset after conditioning on the data. Symmetry of the estimator therefore gives {% raw %}<span class="math inline">\(\mathbb{E}[V_n(x)\mid X_1,\ldots,X_n]=U_n(x)\)</span>{% endraw %}. Unconditionally, the permuted observations remain iid, so the block indicators are independent Bernoulli variables with mean {% raw %}<span class="math inline">\(J_m(x,P)\)</span>{% endraw %}. Conditional Jensen now gives the required direction:</p>
{% raw %}<div class="math display">\[\operatorname{Var}(U_n(x))\le\operatorname{Var}(V_n(x))\le\frac1{4k}.\]</div>{% endraw %}
<p>The conditioning identity can also be seen by counting permutations. For each fixed block position, every subset {% raw %}<span class="math inline">\(A\)</span>{% endraw %} of size {% raw %}<span class="math inline">\(m\)</span>{% endraw %} occurs in exactly {% raw %}<span class="math inline">\(m!(n-m)!\)</span>{% endraw %} of the {% raw %}<span class="math inline">\(n!\)</span>{% endraw %} permutations. Hence its conditional probability is {% raw %}<span class="math inline">\(\binom nm^{-1}\)</span>{% endraw %}, independently of the block position. Averaging over the {% raw %}<span class="math inline">\(k\)</span>{% endraw %} positions gives {% raw %}<span class="math inline">\(E[V_n(x)\mid X]=U_n(x)\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[E\{U_n(x)-J_m(x,P)\}^2=E\{E[V_n(x)-J_m(x,P)\mid X]\}^2\le E\{V_n(x)-J_m(x,P)\}^2.\]</div>{% endraw %}

<p>The many overlapping subsamples need not be independent. Independence is used only for the disjoint blocks before taking their conditional average.</p>
<p>Since {% raw %}<span class="math inline">\(m/n\to0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(k\to\infty\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(U_n(x)-J_m(x,P)\xrightarrow{P}0\)</span>{% endraw %}, and Assumption 1 gives {% raw %}<span class="math inline">\(U_n(x)\xrightarrow{P}J(x,P)\)</span>{% endraw %} at every continuity point.</p>
<p>The difference between the two centerings is {% raw %}<span class="math inline">\(D_n=\tau_m(\widehat\theta_n-\theta(P))=(\tau_m/\tau_n)R_n=o_P(1)\)</span>{% endraw %}, because the limiting law makes {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} tight. More precisely, {% raw %}<span class="math inline">\(K_{n,m}(x)=U_n(x+D_n)\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(\{|D_n|\le\epsilon\}\)</span>{% endraw %},</p>
<span id="eq:subsampling-consistency-a-1"></span>
{% raw %}<div class="math display">\[U_n(x-\epsilon)\le K_{n,m}(x)\le U_n(x+\epsilon).\tag{1}\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(x\pm\epsilon\)</span>{% endraw %} among continuity points and let {% raw %}<span class="math inline">\(\epsilon\downarrow0\)</span>{% endraw %}; this proves part (a). If {% raw %}<span class="math inline">\(J\)</span>{% endraw %} is continuous, a finite grid whose successive cdf increments are small, together with monotonicity and tail bounds, upgrades pointwise convergence in probability to uniform convergence. The deterministic cdfs {% raw %}<span class="math inline">\(J_n\)</span>{% endraw %} also converge uniformly to {% raw %}<span class="math inline">\(J\)</span>{% endraw %}. The triangle inequality proves part (b).</p>
<p>Here is the probability estimate behind part (a). Given {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, choose continuity points {% raw %}<span class="math inline">\(x\pm\epsilon\)</span>{% endraw %} so close to {% raw %}<span class="math inline">\(x\)</span>{% endraw %} that both {% raw %}<span class="math inline">\(|J(x\pm\epsilon,P)-J(x,P)|&lt;\eta/2\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[\begin{aligned}P(|K_{n,m}(x)-J(x,P)|&gt;\eta)&amp;\le P(|D_n|&gt;\epsilon)\\&amp;\quad+P(|U_n(x-\epsilon)-J(x-\epsilon,P)|&gt;\eta/2)\\&amp;\quad+P(|U_n(x+\epsilon)-J(x+\epsilon,P)|&gt;\eta/2)\longrightarrow0.\end{aligned}\]</div>{% endraw %}

<p>For part (b), choose a finite grid spanning all but {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %} of each limiting tail, with successive limiting cdf increments at most {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. The union bound makes the maximum error on this finite grid tend to zero in probability; monotonicity bounds every intervening error by the grid error plus {% raw %}<span class="math inline">\(\eta\)</span>{% endraw %}. Thus no uncountable intersection of probability-one events is required.</p>
<p>For part (c), let {% raw %}<span class="math inline">\(c=c(1-\alpha,P)\)</span>{% endraw %}. Continuity and strict increase at this quantile mean that, for every {% raw %}<span class="math inline">\(\epsilon&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(J(c-\epsilon,P)&lt;1-\alpha&lt;J(c+\epsilon,P)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(J(c,P)=1-\alpha\)</span>{% endraw %}. If either endpoint is a discontinuity, choose nearby continuity points still on the respective sides of the quantile. Cdf convergence at these continuity points traps the empirical quantile between them with probability tending to one, so {% raw %}<span class="math inline">\(c_{n,m}(1-\alpha)\xrightarrow{P}c\)</span>{% endraw %}. The limit law of {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %}, continuity at {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, and Slutsky's theorem then give the stated coverage. □</p>
</div>

<h2 id="multivariate-confidence-regions">
Multivariate confidence regions
</h2>
<p>Keep the iid sample and all {% raw %}<span class="math inline">\(\binom nm\)</span>{% endraw %} subsets from Algorithm 2. Now let {% raw %}<span class="math inline">\(\theta(P)\in\mathbb R^d\)</span>{% endraw %}, with fixed {% raw %}<span class="math inline">\(d\)</span>{% endraw %}, and let the estimation rule be measurable and symmetric at every sample size. Choose a fixed norm {% raw %}<span class="math inline">\(\|\cdot\|\)</span>{% endraw %} and known positive constants {% raw %}<span class="math inline">\(\tau_n\to\infty\)</span>{% endraw %}. Suppose</p>
{% raw %}<div class="math display">\[
\tau_n\{\hat\theta_n-\theta(P)\}\rightsquigarrow Z
\quad\text{in }\mathbb R^d,
\qquad m\to\infty,\quad m/n\to0,\quad\tau_m/\tau_n\to0.
\]</div>{% endraw %}
<p>The scalar root is now {% raw %}<span class="math inline">\(R_n^{\|\cdot\|}=\tau_n\|\hat\theta_n-\theta(P)\|\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(J^{\|\cdot\|}(x,P)=P(\|Z\|\leq x)\)</span>{% endraw %}, and define</p>
{% raw %}<div class="math display">\[
\begin{aligned}
K^{\|\cdot\|}_{n,m}(x)
&amp;=\binom nm^{-1}\sum_{|A|=m}
\mathbf1\{\tau_m\|\hat\theta_m(X_A)-\hat\theta_n\|\leq x\},\\
c^{\|\cdot\|}_{n,m}(1-\alpha)
&amp;=\inf\{x:K^{\|\cdot\|}_{n,m}(x)\geq1-\alpha\}.
\end{aligned}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(c=\inf\{x:J^{\|\cdot\|}(x,P)\geq1-\alpha\}\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(c\)</span>{% endraw %} is finite, {% raw %}<span class="math inline">\(J^{\|\cdot\|}\)</span>{% endraw %} is continuous at {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, and, for every {% raw %}<span class="math inline">\(\epsilon&gt;0\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
J^{\|\cdot\|}(c-\epsilon,P)&lt;1-\alpha
&lt;J^{\|\cdot\|}(c+\epsilon,P).
\]</div>{% endraw %}
<p>In particular, {% raw %}<span class="math inline">\(J^{\|\cdot\|}(c,P)=1-\alpha\)</span>{% endraw %}. These conditions exclude an atom or a flat quantile at the desired level; weak convergence by itself does not exclude either.</p>
<p><strong>Proposition.</strong> Under these assumptions, {% raw %}<span class="math inline">\(K^{\|\cdot\|}_{n,m}(x)\xrightarrow{P} J^{\|\cdot\|}(x,P)\)</span>{% endraw %} at every continuity point, {% raw %}<span class="math inline">\(c^{\|\cdot\|}_{n,m}(1-\alpha)\xrightarrow{P} c\)</span>{% endraw %}, and the region</p>
{% raw %}<div class="math display">\[
C_n=\left\{\vartheta\in\mathbb R^d:
\|\hat\theta_n-\vartheta\|\leq
\frac{c^{\|\cdot\|}_{n,m}(1-\alpha)}{\tau_n}\right\}
\]</div>{% endraw %}
<p>satisfies {% raw %}<span class="math inline">\(P\{\theta(P)\in C_n\}\to1-\alpha\)</span>{% endraw %}. This is a pointwise statement for each distribution {% raw %}<span class="math inline">\(P\)</span>{% endraw %} satisfying the assumptions, not a uniform assertion over a class of populations.</p>
<p><em>Proof.</em> Center the subsample norm at {% raw %}<span class="math inline">\(\theta(P)\)</span>{% endraw %} and call its empirical cdf {% raw %}<span class="math inline">\(U_n^{\|\cdot\|}\)</span>{% endraw %}. The disjoint-block argument in Theorem 3 applies to any measurable symmetric indicator kernel. Its expectation is the cdf of {% raw %}<span class="math inline">\(\tau_m\|\hat\theta_m-\theta(P)\|\)</span>{% endraw %}, and its variance is at most {% raw %}<span class="math inline">\(1/(4\lfloor n/m\rfloor)\)</span>{% endraw %}. The norm is continuous, so the assumed vector convergence gives convergence of this root to {% raw %}<span class="math inline">\(\|Z\|\)</span>{% endraw %}.</p>
<p>The scalar proof’s exact translation identity must be replaced by the reverse triangle inequality:</p>
{% raw %}<div class="math display">\[
\left|\tau_m\|\hat\theta_m(X_A)-\hat\theta_n\|
-\tau_m\|\hat\theta_m(X_A)-\theta(P)\|\right|
\leq D_n,
\qquad
D_n=\frac{\tau_m}{\tau_n}
\|\tau_n(\hat\theta_n-\theta(P))\|=o_P(1).
\]</div>{% endraw %}
<p>This bound holds for every subset at once. On {% raw %}<span class="math inline">\(\{D_n\leq\epsilon\}\)</span>{% endraw %} it gives</p>
{% raw %}<div class="math display">\[
U_n^{\|\cdot\|}(x-\epsilon)
\leq K^{\|\cdot\|}_{n,m}(x)
\leq U_n^{\|\cdot\|}(x+\epsilon).
\]</div>{% endraw %}
<p>The same continuity-point sandwich proves cdf convergence. Choose the bracketing points to be continuity points of the limiting cdf; this is possible because its discontinuities are countable. The strict inequalities at {% raw %}<span class="math inline">\(c\)</span>{% endraw %} trap the estimated quantile, just as in Theorem 3(c). Finally, sandwich the coverage event between roots below {% raw %}<span class="math inline">\(c-\epsilon\)</span>{% endraw %} and below {% raw %}<span class="math inline">\(c+\epsilon\)</span>{% endraw %}, allowing the event that the critical value differs from {% raw %}<span class="math inline">\(c\)</span>{% endraw %} by more than {% raw %}<span class="math inline">\(\epsilon\)</span>{% endraw %}. Continuity at {% raw %}<span class="math inline">\(c\)</span>{% endraw %} proves the claimed coverage. □</p>
<p><em>Remark.</em> In the proof of coverage for the <a href="#multivariate-confidence-regions">multivariate confidence region</a>, no independence assumption is imposed on the norm root and its estimated subsampling critical value.</p>
<p>The Euclidean norm gives a ball. The maximum norm gives a rectangle with a single critical value calibrated to joint coverage. Separate coordinatewise intervals at level {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %} do not generally have joint coverage {% raw %}<span class="math inline">\(1-\alpha\)</span>{% endraw %}. Fixed weights can rescale coordinates with different units, but estimating those weights or studentizing would require additional justification. Neither is needed here.</p>
<h2 id="simultaneous-confidence-bands">
Simultaneous confidence bands
</h2>
<p>Let {% raw %}<span class="math inline">\(\mathcal T\)</span>{% endraw %} be a compact metric space and work in the separable Banach space {% raw %}<span class="math inline">\(C(\mathcal T)\)</span>{% endraw %} with norm {% raw %}<span class="math inline">\(\|f\|_\infty=\sup_{t\in\mathcal T}|f(t)|\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(\theta(P)\in C(\mathcal T)\)</span>{% endraw %} and each {% raw %}<span class="math inline">\(\hat\theta_n\)</span>{% endraw %} is a Borel-measurable, symmetric {% raw %}<span class="math inline">\(C(\mathcal T)\)</span>{% endraw %}-valued estimator. Assume the functional limit</p>
{% raw %}<div class="math display">\[
\tau_n(\hat\theta_n-\theta(P))\rightsquigarrow Z
\quad\text{in }C(\mathcal T)
\]</div>{% endraw %}
<p>for a tight Borel random element {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}, with the same conditions on {% raw %}<span class="math inline">\(m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\tau_n\)</span>{% endraw %}. This is convergence in the uniform norm topology. Convergence of a finite collection of evaluations alone would not suffice.</p>
<p>Use the scalar subsample roots</p>
{% raw %}<div class="math display">\[
R_{n,m,A}^{\infty}
=\tau_m\sup_{t\in\mathcal T}
|\hat\theta_m(X_A)(t)-\hat\theta_n(t)|,
\qquad
K_{n,m}^{\infty}(x)=\binom nm^{-1}\sum_{|A|=m}
\mathbf1\{R_{n,m,A}^{\infty}\leq x\},
\]</div>{% endraw %}
<p>and {% raw %}<span class="math inline">\(c_{n,m}^{\infty}(1-\alpha)=\inf\{x:K_{n,m}^{\infty}(x)\geq1-\alpha\}\)</span>{% endraw %}. The supremum is measurable: for any fixed countable dense {% raw %}<span class="math inline">\(\mathcal T_0\subset\mathcal T\)</span>{% endraw %}, continuity of the paths makes the supremum over {% raw %}<span class="math inline">\(\mathcal T\)</span>{% endraw %} equal to the supremum over {% raw %}<span class="math inline">\(\mathcal T_0\)</span>{% endraw %}. The norm is also a continuous function on {% raw %}<span class="math inline">\(C(\mathcal T)\)</span>{% endraw %}.</p>
<p>If the cdf of {% raw %}<span class="math inline">\(\|Z\|_\infty\)</span>{% endraw %} satisfies the same continuity and strict quantile conditions as above, the band</p>
{% raw %}<div class="math display">\[
L_n(t)=\hat\theta_n(t)-\frac{c_{n,m}^{\infty}(1-\alpha)}{\tau_n},
\qquad
U_n(t)=\hat\theta_n(t)+\frac{c_{n,m}^{\infty}(1-\alpha)}{\tau_n}
\]</div>{% endraw %}
<p>has simultaneous coverage</p>
{% raw %}<div class="math display">\[
P\{L_n(t)\leq\theta(P)(t)\leq U_n(t)
\text{ for every }t\in\mathcal T\}\longrightarrow1-\alpha.
\]</div>{% endraw %}
<p>Indeed, the event is exactly {% raw %}<span class="math inline">\(\{\tau_n\|\hat\theta_n-\theta(P)\|_\infty\leq c_{n,m}^{\infty}(1-\alpha)\}\)</span>{% endraw %}. Apply the preceding proof with the supremum norm: the permutation variance bound is unchanged, and the centering error is bounded by {% raw %}<span class="math inline">\(\tau_m\|\hat\theta_n-\theta(P)\|_\infty=o_P(1)\)</span>{% endraw %}. The additional requirements are functional weak convergence and measurability of the norm root. A general estimator in {% raw %}<span class="math inline">\(\ell^\infty(\mathcal T)\)</span>{% endraw %} need not be a Borel random element; the present {% raw %}<span class="math inline">\(C(\mathcal T)\)</span>{% endraw %} formulation avoids assuming that difficulty away.</p>
<p>Pointwise coverage controls the probability of covering one fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %}. Simultaneous coverage controls one event covering the entire curve. Computing a different pointwise quantile at every {% raw %}<span class="math inline">\(t\)</span>{% endraw %} does not provide the displayed simultaneous guarantee.</p>
<h3 id="subsampling-mean-curve-example">
Example: a mean curve with random intercept and slope
</h3>
<p>Suppose the observations are iid pairs {% raw %}<span class="math inline">\(X_i=(A_i,B_i)\sim\mathcal N_2(\mu,\Sigma)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} is positive definite and may be unknown. On {% raw %}<span class="math inline">\(\mathcal T=[0,1]\)</span>{% endraw %}, define</p>
{% raw %}<div class="math display">\[
\theta(P)(t)=\mathbb E[A_i+tB_i]=\mu_A+t\mu_B,
\qquad
\hat\theta_n(t)=\bar A_n+t\bar B_n.
\]</div>{% endraw %}
<p>This is the sample-mean problem from the <a href="{% post_url 2022-09-29-bootstrapping-the-mean-and-coverage-accuracy %}">preceding post</a>, applied to two coordinates. Its sampling law is particularly easy to check: for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sqrt n(\bar X_n-\mu)\)</span>{% endraw %} has exactly the law of {% raw %}<span class="math inline">\(G=(G_A,G_B)\sim\mathcal N_2(0,\Sigma)\)</span>{% endraw %}. The continuous map {% raw %}<span class="math inline">\((a,b)\mapsto(t\mapsto a+tb)\)</span>{% endraw %} therefore gives the functional limit {% raw %}<span class="math inline">\(Z(t)=G_A+tG_B\)</span>{% endraw %} without a separate functional central limit theorem. These estimators take values in a two-dimensional subspace of {% raw %}<span class="math inline">\(C[0,1]\)</span>{% endraw %}, so Borel measurability holds as well.</p>
<p>For an affine function, the triangle inequality gives {% raw %}<span class="math inline">\(|a+tb|\leq(1-t)|a|+t|a+b|\)</span>{% endraw %}, and hence</p>
{% raw %}<div class="math display">\[
\|Z\|_\infty=\max\{|G_A|,|G_A+G_B|\}.
\]</div>{% endraw %}
<p>The vector {% raw %}<span class="math inline">\((G_A,G_A+G_B)\)</span>{% endraw %} has an everywhere positive density because its linear transformation is invertible and {% raw %}<span class="math inline">\(\Sigma\)</span>{% endraw %} is positive definite. The boundary of {% raw %}<span class="math inline">\([-x,x]^2\)</span>{% endraw %} has probability zero, and every nonempty difference between two such squares has positive probability. Thus the root cdf is continuous and strictly increasing for {% raw %}<span class="math inline">\(x&gt;0\)</span>{% endraw %}, from zero to one. All the quantile conditions hold for {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %}.</p>
<p>Take {% raw %}<span class="math inline">\(m=\lfloor n^{1/2}\rfloor\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\tau_n=\sqrt n\)</span>{% endraw %}. For each subset, the supremum root is computed from just the two endpoints:</p>
{% raw %}<div class="math display">\[
R_{n,m,A}^{\infty}
=\sqrt m\max\left\{
|\bar A_A-\bar A_n|,
|\bar A_A+\bar B_A-\bar A_n-\bar B_n|
\right\}.
\]</div>{% endraw %}
<p>Its empirical critical value gives the band above over all {% raw %}<span class="math inline">\(t\in[0,1]\)</span>{% endraw %}. No covariance estimate or unknown scale enters the root. The Gaussian assumption is specific to this checkable example; the general result requires only the stated functional limit and quantile conditions. For a nonlinear random curve, reducing the supremum to its endpoints would generally be wrong.</p>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-09-29-bootstrapping-the-mean-and-coverage-accuracy %}">Bootstrapping the Mean and Coverage Accuracy</a></p></nav>

</div>
