---
layout: "post"
title: "Uniform Laws of Large Numbers and Stochastic Equicontinuity"
date: "2022-07-02"
tags: ["probability theory", "asymptotic theory"]
excerpt: "Let us begin with a statistical example that motivates the study of empirical processes."
note_series: "Uniform laws of large numbers"
note_source: "assets/notes/Uniform Law of Large Numbers/main.tex"
---

<div class="note-content" markdown="0">

<p>An estimator is evaluated at a parameter chosen from the same data that define the empirical criterion. A law of large numbers at each fixed parameter does not by itself justify that substitution. Uniform laws control the error over a parameter set, while stochastic equicontinuity controls it locally. The binary-choice example below shows where these requirements enter an estimator’s expansion.</p>

<div id="introduction-and-motivation" data-note-section="title">

</div>
<p>Begin with a binary-choice model and a likelihood estimator. The score expansion will expose an empirical average evaluated at the estimated parameter.</p>

<div id="result-1" class="example" data-note-number="1" data-note-kind="Example">
<p><strong>Example 1</strong> (Binary choice model).  Let {% raw %}<span class="math inline">\(X_i = (Y_i, Z_i)\)</span>{% endraw %}, where </p>

{% raw %}<div class="math display">\[Y_i = \begin{cases*}
            1 &amp; with a job \\
            0 &amp; otherwise
        \end{cases*}\]</div>{% endraw %}
<p> and {% raw %}<span class="math inline">\(Z_i\)</span>{% endraw %} be the level of education (measured in years).</p>

<p>A logistic or probit model specifies a relationship between {% raw %}<span class="math inline">\(Y_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z_i\)</span>{% endraw %} through a chosen link function. For the logistic model, consider </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathds{P}}}(Y=1|Z=z) = F_0 (\alpha_0 + \theta_0 z)\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(F_0(\xi) = \frac{\exp \xi}{ 1 + \exp \xi }\)</span>{% endraw %} is the logistic function. For simplicity, set {% raw %}<span class="math inline">\(\alpha_0 = 0\)</span>{% endraw %}, so we focus on the relationship captured by {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}.</p>

<p>By standard M-estimation, we have </p>

{% raw %}<div class="math display">\[\widehat{\theta}_n \in \arg\max_{\theta \in \Theta} \sum_{i=1}^{n} \log p_{\theta} (Y_i | Z_i)\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(p_{\theta} (\cdot)\)</span>{% endraw %} is the conditional density function </p>

{% raw %}<div class="math display">\[p_{\theta} (y | z) = F_0 (\theta z)^y \left[ 1 - F_0 (\theta z) \right]^{1-y},\qquad y\in\{0,1\}\]</div>{% endraw %}
<p> One can then introduce the <em>score function</em> </p>

{% raw %}<div class="math display">\[\begin{aligned}
        \ell_{\theta} (y,z) &amp;= \dod{}{\theta} \log p_{\theta} (y | z) \\
        
        &amp;= z (y-F_0 (\theta z))
    
\end{aligned}\]</div>{% endraw %}
<p>Assume the observations are i.i.d., the logistic model is correctly specified, and {% raw %}<span class="math inline">\(\mathbb{E} Z^2&lt;\infty\)</span>{% endraw %}. Define the secant slope of the score by</p>
{% raw %}<div class="math display">\[g_\theta(z)=z^2\int_0^1 F_0'\big((\theta_0+t(\theta-\theta_0))z\big)\,dt.\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(0\le g_\theta(z)\le z^2/4\)</span>{% endraw %}, {% raw %}<span class="math inline">\(g_\theta(z)\to g_{\theta_0}(z)\)</span>{% endraw %}, and the exact identity</p>
{% raw %}<div class="math display">\[\ell_\theta(y,z)=\ell_{\theta_0}(y,z)-(\theta-\theta_0)g_\theta(z)\]</div>{% endraw %}
<p>holds also at {% raw %}<span class="math inline">\(\theta=\theta_0\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(Ph=\mathbb{E} h(X)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_nh=n^{-1}\sum_i h(X_i)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\mathbb G_nh=\sqrt n(P_n-P)h\)</span>{% endraw %}. The scalar information is {% raw %}<span class="math inline">\(I_{\theta_0}=Pg_{\theta_0}=\mathbb{E}[Z^2F_0(\theta_0Z)(1-F_0(\theta_0Z))]\)</span>{% endraw %}; assume it is positive. Conditional centering of the Bernoulli response gives {% raw %}<span class="math inline">\(P\ell_{\theta_0}=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(P\ell_{\theta_0}^2=I_{\theta_0}\)</span>{% endraw %}.</p>
<div id="Lem:Example_1_Preliminary" class="lemma" data-note-number="2" data-note-kind="Lemma">
<p><strong>Lemma 2.</strong> Suppose the estimator solves {% raw %}<span class="math inline">\(P_n\ell_{\widehat\theta_n}=0\)</span>{% endraw %} with probability tending to one, and</p>
<span id="Eq:Pre_LLN_Relation"></span>
{% raw %}<div class="math display">\[P_ng_{\widehat\theta_n}\xrightarrow{P}I_{\theta_0}.\tag{1}\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(\sqrt n(\widehat\theta_n-\theta_0)\Rightarrow\mathcal{N}(0,I_{\theta_0}^{-1})\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> An interior maximizer has zero score, rather than zero derivative of the score. Substituting the exact secant identity gives</p>
{% raw %}<div class="math display">\[0=P_n\ell_{\widehat\theta_n}=P_n\ell_{\theta_0}-(\widehat\theta_n-\theta_0)P_ng_{\widehat\theta_n},\qquad
\sqrt n(\widehat\theta_n-\theta_0)=\frac{\mathbb G_n\ell_{\theta_0}}{P_ng_{\widehat\theta_n}}.\]</div>{% endraw %}
<p>The iid central limit theorem applies to the numerator, whose variance is {% raw %}<span class="math inline">\(I_{\theta_0}\)</span>{% endraw %}; Slutsky's theorem proves the assertion. The denominator assumption also follows from consistency here: for fixed {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, the local difference is bounded by {% raw %}<span class="math inline">\(P_n\sup_{|\theta-\theta_0|\le\delta}|g_\theta-g_{\theta_0}|\)</span>{% endraw %}. The fixed-function law of large numbers and dominated convergence, using the envelope {% raw %}<span class="math inline">\(Z^2/2\)</span>{% endraw %}, make this bound tend to zero as first {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}. □</p>
</div>
<p>The local law used in Lemma 2 can be written as a three-event estimate. Define {% raw %}<span class="math inline">\(H_\delta(z)=\sup_{|\theta-\theta_0|\le\delta}|g_\theta(z)-g_{\theta_0}(z)|\)</span>{% endraw %}. Continuity in {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} means the supremum can be taken over a countable dense subset, so it is measurable. Moreover {% raw %}<span class="math inline">\(H_\delta\to0\)</span>{% endraw %} pointwise as {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(H_\delta\le Z^2/2\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(\{|\widehat\theta_n-\theta_0|\le\delta\}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[|P_ng_{\widehat\theta_n}-I_{\theta_0}|\le P_nH_\delta+|(P_n-P)g_{\theta_0}|.\]</div>{% endraw %}

<p>For fixed {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %}, the two sample averages converge by the integrable LLN. Since {% raw %}<span class="math inline">\(PH_\delta\to0\)</span>{% endraw %} by dominated convergence, consistency of {% raw %}<span class="math inline">\(\widehat\theta_n\)</span>{% endraw %} finishes the argument. Thus evaluation at a data-dependent parameter is justified by a local supremum, not by a pointwise LLN applied after observing that parameter.</p>
<p>A score equation need not be solved exactly. Stochastic equicontinuity gives a version for approximate roots.</p>
<div id="Lem:Example_1_Upgraded" class="lemma" data-note-number="3" data-note-kind="Lemma">
<p><strong>Lemma 3.</strong> Under the same model and moment assumptions, suppose {% raw %}<span class="math inline">\(\widehat\theta_n\xrightarrow{P}\theta_0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(P_n\ell_{\widehat\theta_n}=o_P(n^{-1/2})\)</span>{% endraw %}, and</p>
<span id="Eq:Pre_LLN_Relation_2"></span>
{% raw %}<div class="math display">\[\mathbb G_n(\ell_{\widehat\theta_n}-\ell_{\theta_0})=o_P(1).\tag{2}\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(\sqrt n(\widehat\theta_n-\theta_0)\Rightarrow\mathcal{N}(0,I_{\theta_0}^{-1})\)</span>{% endraw %}.</p>
</div>
<div class="proof">
<p><em>Proof.</em> The approximate score equation and (2) imply {% raw %}<span class="math inline">\(-\sqrt nP\ell_{\widehat\theta_n}=\mathbb G_n\ell_{\theta_0}+o_P(1)\)</span>{% endraw %}. Taking population expectations in the secant identity gives {% raw %}<span class="math inline">\(P\ell_\theta=-(\theta-\theta_0)Pg_\theta\)</span>{% endraw %}. Dominated convergence and consistency give {% raw %}<span class="math inline">\(Pg_{\widehat\theta_n}\xrightarrow{P} I_{\theta_0}&gt;0\)</span>{% endraw %}. Therefore</p>
{% raw %}<div class="math display">\[\sqrt n(\widehat\theta_n-\theta_0)=\frac{\mathbb G_n\ell_{\theta_0}+o_P(1)}{Pg_{\widehat\theta_n}}.\]</div>{% endraw %}
<p>The same central limit theorem applies. This argument establishes the rate as part of the conclusion; it does not assume it in order to control a Taylor remainder. □</p>
</div>

<p>Another approach is to consider the slightly more general case, where we just want to estimate a distribution function: </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathds{P}}}(Y=1|Z=z) = F_0(z)\]</div>{% endraw %}
<p> for any {% raw %}<span class="math inline">\(F_0 \in \Lambda \triangleq \left\{ F:\mathop{\mathrm{\mathbb{R}}}\to [0,1]  : \: F(x) \geqslant F(y) , \:  \forall x \geqslant y \right\}\)</span>{% endraw %}. As such, the maximum likelihood estimate satisfies </p>

{% raw %}<div class="math display">\[\widehat{F}_n \in \arg\max_{F \in \Lambda} \sum_{i=1}^{n} Y_i \log F(Z_i) + (1-Y_i) \log (1-F(Z_i))\]</div>{% endraw %}
<p> The objective is smooth in the fitted probabilities when they lie strictly between zero and one, but the monotonicity constraint couples those probabilities and the parameter is a function. A fixed-dimensional unconstrained score equation does not describe this optimization problem.</p>

<p>Criterion comparisons provide another route when a finite-dimensional score expansion is unavailable. Their empirical error must again be controlled uniformly.</p>

<p>For a dominated model {% raw %}<span class="math inline">\(\{p_\theta:\theta\in\Theta\}\)</span>{% endraw %} with true density {% raw %}<span class="math inline">\(p_{\theta_0}\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(q_\theta=\log(p_{\theta_0}/p_\theta)\)</span>{% endraw %}, assuming these contrasts are integrable. Their population means are the Kullback–Leibler divergences</p>
{% raw %}<div class="math display">\[Pq_\theta=\mathrm{KL}(p_{\theta_0}\Vert p_\theta)=\int\log\frac{p_{\theta_0}}{p_\theta}\,p_{\theta_0}\,d\mu\ge0.\]</div>{% endraw %}
<p>An exact likelihood maximizer satisfies {% raw %}<span class="math inline">\(P_nq_{\widehat\theta_n}\le0\)</span>{% endraw %}. Consequently,</p>
{% raw %}<div class="math display">\[0\le\mathrm{KL}(p_{\theta_0}\Vert p_{\widehat\theta_n})
=Pq_{\widehat\theta_n}\le |(P_n-P)q_{\widehat\theta_n}|
\le\sup_{\theta\in\Theta}|(P_n-P)q_\theta|.\]</div>{% endraw %}
<p>A uniform law for the contrast class therefore gives convergence of the fitted density in KL divergence. Parameter consistency additionally requires separation: outside each neighborhood of {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, the population divergence must have a positive infimum. This argument also applies to an approximate maximizer with an added {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %} optimization error. The ordinary strong law at each fixed contrast would not justify substitution of the fitted index.</p>

</div>
<p>The KL separation step is also an explicit probability bound. If {% raw %}<span class="math inline">\(c_\varepsilon=\inf_{d(\theta,\theta_0)\ge\varepsilon}Pq_\theta&gt;0\)</span>{% endraw %} and the likelihood optimization error is bounded by a nonnegative {% raw %}<span class="math inline">\(r_n=o_P(1)\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[P\{d(\widehat\theta_n,\theta_0)\ge\varepsilon\}\le P\left\{\sup_{\theta\in\Theta}|(P_n-P)q_\theta|+r_n\ge c_\varepsilon\right\}\longrightarrow0.\]</div>{% endraw %}

<p>KL nonnegativity follows from {% raw %}<span class="math inline">\(-\log u\ge1-u\)</span>{% endraw %}, applied to {% raw %}<span class="math inline">\(u=p_\theta/p_{\theta_0}\)</span>{% endraw %} on the support of the true density and then integrated. The likelihood comparison controls a divergence; the positive separation constant is what converts that control into convergence of the parameter.</p>
<h2 data-note-section="1" id="uniform-law-of-large-numbers">1. Uniform Law of Large Numbers</h2>
<p>For the ensuing discussions, fix an underlying probability space {% raw %}<span class="math inline">\((\mathscr{X},\mathop{\mathrm{\mathfrak{F}}},\mathop{\mathrm{\mathds{P}}})\)</span>{% endraw %}. Consider the space of functions </p>

{% raw %}<div class="math display">\[\mathop{\mathrm{\mathcal{G}}}\triangleq \left\{ g_{\theta}  : \: \theta \in \Theta   \right\}\]</div>{% endraw %}
<p> defined on {% raw %}<span class="math inline">\(\mathscr{X}\)</span>{% endraw %}. Furthermore, let {% raw %}<span class="math inline">\(X_1,X_2,\dots\)</span>{% endraw %} denote independent copies of random variable {% raw %}<span class="math inline">\(X\)</span>{% endraw %} defined on {% raw %}<span class="math inline">\((\mathscr{X},\mathop{\mathrm{\mathfrak{F}}},\mathop{\mathrm{\mathds{P}}})\)</span>{% endraw %}.</p>

<div id="result-4" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4</strong>.  {% raw %}<span class="math inline">\(\mathop{\mathrm{\mathcal{G}}}\)</span>{% endraw %} satisfies the <em>uniform law of large numbers (ULLN)</em> if </p>

{% raw %}<div class="math display">\[\sup_{\theta \in \Theta} \abs{\frac{1}{n} \sum_{i=1}^{n} g_{\theta} (X_i) - \mathbb{E}g_{\theta} (X_i) } \xrightarrow{n \to \infty} 0, \quad \text{a.s.}\]</div>{% endraw %}
</div>
<p>If the above holds, then clearly </p>

{% raw %}<div class="math display">\[\abs{\frac{1}{n} \sum_{i=1}^{n} g_{\widehat{\theta}_n} (X_i) - \mathbb{E}g_{\widehat{\theta}_n} (X_i) } \xrightarrow{n \to \infty} 0, \quad \text{a.s.}\]</div>{% endraw %}
<p> the slight abuse of notation above is where if {% raw %}<span class="math inline">\(\widehat{\theta}_n\)</span>{% endraw %} is random, then {% raw %}<span class="math inline">\(\mathbb{E}g_{\widehat{\theta}_n} (X_i)\)</span>{% endraw %} is not an expectation! Notice that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}g_{\theta} (X_i) &amp;= \int g_{\theta} \dif \mathop{\mathrm{\mathds{P}}}\\
    \mathbb{E}g_{\widehat{\theta}_n} (X_i) &amp;= \int g_{\widehat{\theta}_n} \dif \mathop{\mathrm{\mathds{P}}}
\end{aligned}\]</div>{% endraw %}
<p> Also note that neither of the above represents the empirical mean; instead, that is defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \frac{1}{n} \sum_{i=1}^{n} g_{\theta} (X_i) = \int g_{\theta} \dif \mathbb{P}_n
\end{aligned}\]</div>{% endraw %}
<p> and the difference between </p>

{% raw %}<div class="math display">\[\frac{1}{n} \sum_{i=1}^{n} g_{\theta} (X_i) - \mathbb{E}g_{\theta} = \int g_{\theta} \dif (\mathbb{P}_n - \mathop{\mathrm{\mathds{P}}})\]</div>{% endraw %}



<p>For a random index, the population integral means {% raw %}<span class="math inline">\(Pg_{\widehat\theta_n}(\omega)=\int g_{\widehat\theta_n(\omega)}(x)\,P(dx)\)</span>{% endraw %}, with the fitted index held fixed while integrating over a fresh variable {% raw %}<span class="math inline">\(x\)</span>{% endraw %}. It generally differs from the unconditional expectation of {% raw %}<span class="math inline">\(g_{\widehat\theta_n}(X_i)\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %} helped choose the index. The pathwise inequality</p>

{% raw %}<div class="math display">\[|(P_n-P)g_{\widehat\theta_n}|\le\sup_{\theta\in\Theta}|(P_n-P)g_\theta|\]</div>{% endraw %}

<p>justifies the substitution. As usual, the supremum must be measurable (for example, for a pointwise measurable class); otherwise the statement is interpreted using outer probability and outer almost-sure convergence.</p>
</div>
