---
layout: "post"
title: "Normal Approximation under Local Dependence"
date: "2022-05-22"
tags: ["probability theory", "statistics"]
excerpt: "When we sample with replacements, the asymptotic theory is relatively standard."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
---

<div class="note-content" markdown="0">

<div id="central-limit-theorem-with-dependence" data-note-section="title">

</div>
<h4 data-note-section="1" id="finite-sample">1. Finite-Sample</h4>
<p>Sampling without replacement creates dependence: once an item is selected, it is no longer available for a later draw. This dependence reduces the variance of the sample mean. We first calculate that reduction, then compare fixed-size sampling with independent Bernoulli selection. The final examples use symmetrisation to construct U-statistics.</p>

<span id="eq:finite-sample-variance-sample-mean"></span>
<p>Let a finite population have labelled values {% raw %}<span class="math inline">\(x_{N,1},\ldots,x_{N,N}\)</span>{% endraw %}; labels remain distinct even if values coincide. Draw {% raw %}<span class="math inline">\(1\leq n\leq N\)</span>{% endraw %} labels uniformly without replacement, with {% raw %}<span class="math inline">\(N&gt;1\)</span>{% endraw %}, and denote their values by {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[\bar X_n=\frac1n\sum_{i=1}^nX_i,\qquad \bar X_N=\frac1N\sum_{j=1}^Nx_{N,j},\qquad s_N^2=\frac1N\sum_{j=1}^N(x_{N,j}-\bar X_N)^2.\]</div>{% endraw %}<p>Each draw has mean {% raw %}<span class="math inline">\(\bar X_N\)</span>{% endraw %} and variance {% raw %}<span class="math inline">\(s_N^2\)</span>{% endraw %}. For distinct draws, conditional expectation gives {% raw %}<span class="math inline">\(\mathbb{E}[X_j\mid X_i]=(N\bar X_N-X_i)/(N-1)\)</span>{% endraw %}, hence</p>

{% raw %}<div class="math display">\[\operatorname{Cov}(X_i,X_j)=-\frac{s_N^2}{N-1},\qquad\operatorname{Var}(\bar X_n)=\frac{s_N^2}{n}-\frac{n-1}{n(N-1)}s_N^2=\frac{s_N^2}{n}\frac{N-n}{N-1}.\tag{1}\]</div>{% endraw %}<p>The factor {% raw %}<span class="math inline">\((N-n)/(N-1)\)</span>{% endraw %} is the finite population correction. It is one for a single draw and zero for a census.</p>

<p>The variance calculation identifies the correct normalising scale. A central limit theorem for {% raw %}<span class="math inline">\(\overline X_n\)</span>{% endraw %} then requires a condition preventing a few population values from dominating that variance.</p>

<div id="thm:CLT-dependence" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong>. Along a sequence of finite populations and sample sizes with {% raw %}<span class="math inline">\(1\leq n&lt;N\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s_N^2&gt;0\)</span>{% endraw %}, suppose</p>

{% raw %}<div class="math display">\[\begin{aligned}
        \min (n, N-n)^{-1} \times \frac{\max_{1 \leq j \leq N} (x_{N,j} - \overline X_N)^2}{s_N^2} \xrightarrow{n \to \infty} 0 ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Then, </p>

{% raw %}<span id="eq:dependence-clt-cvg"></span><div class="math display">\[\begin{aligned}
 
        \frac{\overline X_n - \overline X_N}{\sqrt{\mathop{\mathrm{Var}}(\overline X_n)}} \xrightarrow{d} \mathcal{N}(0,1) ~.
    
\end{aligned}\tag{2}\]</div>{% endraw %}
</div>
<p>We deduce Theorem <a href="#thm:CLT-dependence" data-reference-type="ref" data-reference="thm:CLT-dependence">1</a> from a result due to Hajék.</p>

<div id="thm:hajek-dependence-clt" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong> (Hájek). Assume {% raw %}<span class="math inline">\(s_N^2&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\min(n,N-n)\to\infty\)</span>{% endraw %} along the sequence of sampling experiments. Put</p>

{% raw %}<div class="math display">\[\begin{aligned}
        \delta_{N,j} = \frac{x_{N,j} - \overline X_N}{s_N} ~.
    
\end{aligned}\]</div>{% endraw %}
<p> Then, for every {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}, </p>

{% raw %}<span id="eq:lindeberg-for-dependence"></span><div class="math display">\[\begin{aligned}
 
        \frac1N \sum_{j : |\delta_{N,j}| &gt; \sqrt{\frac{\varepsilon^2 n(N-n)}{N}}} \delta_{N,j}^2 \to 0 \text{ as } n \to \infty
    
\end{aligned}\tag{3}\]</div>{% endraw %}
<p> if and only if <a href="#eq:dependence-clt-cvg" data-reference-type="eqref" data-reference="eq:dependence-clt-cvg">(2)</a> holds.</p>

</div>
<p>This criterion is <a href="https://real.mtak.hu/200979/1/cut_MATKUTINT_5_3_1960_pp361_-_374.pdf">Hájek’s Theorem 3.1 (1960), pp. 365–367</a>. His population values {% raw %}<span class="math inline">\(y_{\nu i}-\bar y_\nu\)</span>{% endraw %} correspond to {% raw %}<span class="math inline">\(s_N\delta_{N,i}\)</span>{% endraw %}. His sample-total variance is {% raw %}<span class="math inline">\(ns_N^2(N-n)/(N-1)\)</span>{% endraw %}; replacing {% raw %}<span class="math inline">\(N-1\)</span>{% endraw %} by {% raw %}<span class="math inline">\(N\)</span>{% endraw %} in the threshold is equivalent because the condition holds for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. We prove sufficiency below. Necessity is the second part of Hájek’s theorem, including its treatment of arrays that fail the maximal-variance condition.</p>

<span id="eq:asymptotically-equivalent-in-mean"></span>
<div id="prop:convergence-in-dist-by-proxy" class="proposition" data-note-number="3" data-note-kind="Proposition">
<p><strong>Proposition 3</strong>. Suppose {% raw %}<span class="math inline">\(0&lt;\operatorname{Var}(\widetilde X_n)&lt;\infty\)</span>{% endraw %}, {% raw %}<span class="math inline">\((\widetilde X_n-\mathbb{E}\widetilde X_n)/\sqrt{\operatorname{Var}(\widetilde X_n)}\Rightarrow Z\)</span>{% endraw %}, and</p>

</div>
{% raw %}<div class="math display">\[\frac{\mathbb{E}[(\widetilde X_n-X_n)^2]}{\operatorname{Var}(\widetilde X_n)}\longrightarrow0.\tag{4}\]</div>{% endraw %}<p>Then {% raw %}<span class="math inline">\((X_n-\mathbb{E}X_n)/\sqrt{\operatorname{Var}(X_n)}\Rightarrow Z\)</span>{% endraw %}.</p>

<div class="proof">
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(a_n=\sqrt{\operatorname{Var}(\widetilde X_n)}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(b_n=\sqrt{\operatorname{Var}(X_n)}\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(D_n=(X_n-\mathbb{E}X_n)-(\widetilde X_n-\mathbb{E}\widetilde X_n)\)</span>{% endraw %}. The assumption guarantees all these second moments exist, and centering cannot increase the second moment:</p>
{% raw %}<div class="math display">\[\|D_n\|_2^2=\operatorname{Var}(X_n-\widetilde X_n)\leq\mathbb{E}(X_n-\widetilde X_n)^2=o(a_n^2).\]</div>{% endraw %}
<p>The reverse triangle inequality gives {% raw %}<span class="math inline">\(|b_n-a_n|\leq\|D_n\|_2\)</span>{% endraw %}, hence {% raw %}<span class="math inline">\(b_n/a_n\to1\)</span>{% endraw %}; in particular {% raw %}<span class="math inline">\(b_n&gt;0\)</span>{% endraw %} eventually. Chebyshev gives {% raw %}<span class="math inline">\(D_n/a_n\to0\)</span>{% endraw %} in probability. Consequently,</p>
{% raw %}<div class="math display">\[\frac{X_n-\mathbb{E}X_n}{b_n}=\frac{a_n}{b_n}\left(\frac{\widetilde X_n-\mathbb{E}\widetilde X_n}{a_n}+\frac{D_n}{a_n}\right)\Rightarrow Z\]</div>{% endraw %}
<p>by Slutsky. ◻</p>
</div>
<div class="proof">
<p><em>Proof.</em></p>

<p><em>Sufficiency in Theorem 2.</em> Center the population, so {% raw %}<span class="math inline">\(\sum_jx_{N,j}=0\)</span>{% endraw %}, and put {% raw %}<span class="math inline">\(p=n/N\)</span>{% endraw %}, {% raw %}<span class="math inline">\(r_N^2=Np(1-p)=n(N-n)/N\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(I_j\)</span>{% endraw %} be independent Bernoulli {% raw %}<span class="math inline">\(p\)</span>{% endraw %} variables. Their selected total is {% raw %}<span class="math inline">\(\widetilde S=\sum_jI_jx_{N,j}\)</span>{% endraw %}, with variance {% raw %}<span class="math inline">\(s_N^2r_N^2\)</span>{% endraw %}. Its centered summands are {% raw %}<span class="math inline">\((I_j-p)x_{N,j}\)</span>{% endraw %}. Since their absolute values are at most {% raw %}<span class="math inline">\(|x_{N,j}|\)</span>{% endraw %}, their normalized Lindeberg sum is at most</p>

{% raw %}<div class="math display">\[\frac1{Ns_N^2}\sum_{j:|x_{N,j}|&gt;\varepsilon s_Nr_N}x_{N,j}^2,\]</div>{% endraw %}<p>which tends to zero by the displayed tail criterion. Thus {% raw %}<span class="math inline">\(\widetilde S/(s_Nr_N)\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %}.</p>

<p>Couple this sample to one of size {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(B=\sum_jI_j&gt;n\)</span>{% endraw %}, remove {% raw %}<span class="math inline">\(B-n\)</span>{% endraw %} selected labels uniformly; if {% raw %}<span class="math inline">\(B&lt;n\)</span>{% endraw %}, add {% raw %}<span class="math inline">\(n-B\)</span>{% endraw %} labels uniformly from the complement. By exchangeability, the resulting sample is uniform of size {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Conditional on {% raw %}<span class="math inline">\(B\)</span>{% endraw %}, the changed labels form a uniform subset of size {% raw %}<span class="math inline">\(d=|B-n|\)</span>{% endraw %} of the population. Their signed sum {% raw %}<span class="math inline">\(\widetilde S-S\)</span>{% endraw %} is centered and has conditional variance {% raw %}<span class="math inline">\(ds_N^2(N-d)/(N-1)\leq ds_N^2\)</span>{% endraw %} when {% raw %}<span class="math inline">\(d\geq1\)</span>{% endraw %}, and zero when {% raw %}<span class="math inline">\(d=0\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[\mathbb{E}(\widetilde S-S)^2\leq s_N^2\mathbb{E}|B-n|\leq s_N^2r_N,\qquad \frac{\mathbb{E}(\widetilde S-S)^2}{\operatorname{Var}(\widetilde S)}\leq r_N^{-1}\longrightarrow0.\]</div>{% endraw %}<p>Here {% raw %}<span class="math inline">\(r_N^2\geq\frac12\min(n,N-n)\to\infty\)</span>{% endraw %}. Proposition 3 transfers the limit to the fixed-size sample. The stronger maximum condition in Theorem 1 makes the tail sum zero eventually, since {% raw %}<span class="math inline">\(\max_j\delta_{N,j}^2/r_N^2\to0\)</span>{% endraw %}, and so proves that theorem as well.</p>

<p>◻</p>

</div>
<h4 data-note-section="2" id="u-statistics">2. U-Statistics</h4>
<p>Let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be i.i.d. real-valued observations, and let {% raw %}<span class="math inline">\(h\)</span>{% endraw %} be a symmetric measurable kernel of fixed degree {% raw %}<span class="math inline">\(r\leq n\)</span>{% endraw %}. A nonsymmetric kernel can first be averaged over its {% raw %}<span class="math inline">\(r!\)</span>{% endraw %} argument permutations. The parameter is</p>

{% raw %}<div class="math display">\[\begin{aligned}
    \theta \triangleq \mathbb{E} h(X_1,\dots,X_r)
\end{aligned}\]</div>{% endraw %}
<p> for some {% raw %}<span class="math inline">\(r \leq n\)</span>{% endraw %}. Note {% raw %}<span class="math inline">\(h(X_1,\dots,X_r)\)</span>{% endraw %} only depends on the first {% raw %}<span class="math inline">\(r\)</span>{% endraw %} arguments, so the displayed estimator based on a single kernel value uses only part of the sample. To estimate {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} without favouring particular sample positions, an estimator of {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} should use more than an arbitrarily selected group of {% raw %}<span class="math inline">\(r\)</span>{% endraw %} arguments it takes.</p>

<p>To estimate {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, average the kernel over all choices of observations. This removes the arbitrary choice of a particular subset and gives an estimator of {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} that is unchanged when the sample is reordered.</p>

<div id="Def:U-statistic-kernel-h" class="definition" data-note-number="4" data-note-kind="Definition">
<p><strong>Definition 4</strong>.  The <em>{% raw %}<span class="math inline">\(U\)</span>{% endraw %}-statistic with kernel {% raw %}<span class="math inline">\(h\)</span>{% endraw %}</em> is defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
        U = \frac{1}{\binom{n}{r}} \sum_{\beta} h(X_{\beta_1}, X_{\beta_2}, \dots, X_{\beta_r})
    
\end{aligned}\]</div>{% endraw %}
</div>
<div class="proof">
<p>The sum ranges over all increasing index tuples {% raw %}<span class="math inline">\(1\leq\beta_1&lt;\cdots&lt;\beta_r\leq n\)</span>{% endraw %}. Thus each unordered subset occurs once. Symmetry of the kernel makes the ordering within that subset immaterial.</p>
</div>

<p>Assume {% raw %}<span class="math inline">\(\mathbb{E}h(X_1,\ldots,X_r)^2&lt;\infty\)</span>{% endraw %}. Averaging gives {% raw %}<span class="math inline">\(\mathbb{E}U=\theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{Var}(U)\leq\operatorname{Var}(h(X_1,\ldots,X_r))\)</span>{% endraw %}; equality is possible. More precisely, conditioning on the full ordered sample gives</p>

{% raw %}<div class="math display">\[U=\mathbb{E}[h(X_1,\ldots,X_r)\mid X_{(1)},\ldots,X_{(n)}].\]</div>{% endraw %}<p>Exchangeability makes every choice of {% raw %}<span class="math inline">\(r\)</span>{% endraw %} sample positions have the same conditional weight. The conditional-variance identity proves the variance bound.</p>

<p>The conditional-expectation identity also follows without assuming distinct observations. Average {% raw %}<span class="math inline">\(h(X_{\pi(1)},\ldots,X_{\pi(r)})\)</span>{% endraw %} over all {% raw %}<span class="math inline">\(n!\)</span>{% endraw %} permutations {% raw %}<span class="math inline">\(\pi\)</span>{% endraw %}. Each subset appears {% raw %}<span class="math inline">\(r!(n-r)!\)</span>{% endraw %} times, so this average is {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Multiplying by any bounded symmetric function of the full sample and using exchangeability shows that {% raw %}<span class="math inline">\(U\)</span>{% endraw %} has the defining integral identity of the displayed conditional expectation. It is measurable with respect to the order statistics, even when ties occur.</p>
<p>For the normal limit define {% raw %}<span class="math inline">\(h_1(x)=\mathbb{E}[h(x,X_2,\ldots,X_r)]-\theta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\zeta_1=\mathbb{E}h_1(X_1)^2\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(\zeta_1&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[U-\theta=\frac rn\sum_{i=1}^nh_1(X_i)+R_n,\qquad \mathbb{E}R_n^2=O(n^{-2}),\qquad \sqrt n(U-\theta)\Rightarrow \mathcal{N}(0,r^2\zeta_1).\]</div>{% endraw %}<p>To check the remainder estimate, subtract {% raw %}<span class="math inline">\(\theta+\sum_{j=1}^rh_1(x_j)\)</span>{% endraw %} from the kernel. The residual has conditional mean zero given any single argument. Two residual kernel values therefore have zero covariance when their index sets share at most one observation. Only {% raw %}<span class="math inline">\(O(n^{2r-2})\)</span>{% endraw %} pairs remain, and each covariance is bounded by the residual second moment. Division by {% raw %}<span class="math inline">\(\binom nr^2\)</span>{% endraw %} proves the bound. For {% raw %}<span class="math inline">\(r=1\)</span>{% endraw %} the remainder is zero. The ordinary CLT and Slutsky finish the argument. If {% raw %}<span class="math inline">\(\zeta_1=0\)</span>{% endraw %}, the first projection vanishes and this nondegenerate normal limit does not apply.</p>

<p>In more detail, let {% raw %}<span class="math inline">\(g(x_1,\ldots,x_r)=h(x_1,\ldots,x_r)-\theta-\sum_{j=1}^rh_1(x_j)\)</span>{% endraw %}. Each observation belongs to {% raw %}<span class="math inline">\(\binom{n-1}{r-1}\)</span>{% endraw %} subsets, giving the coefficient {% raw %}<span class="math inline">\(r/n\)</span>{% endraw %} of the first projection. Jensen shows {% raw %}<span class="math inline">\(\mathbb{E}g^2&lt;\infty\)</span>{% endraw %}. If two subsets share exactly one index {% raw %}<span class="math inline">\(i\)</span>{% endraw %}, their remaining observations are conditionally independent given {% raw %}<span class="math inline">\(X_i\)</span>{% endraw %}, and both residual conditional means are zero. Their covariance is therefore zero; disjoint subsets are independent. For a fixed first subset, at most</p>
{% raw %}<div class="math display">\[\sum_{j=2}^r\binom rj\binom{n-r}{r-j}=O(n^{r-2})\]</div>{% endraw %}
<p>second subsets intersect it in at least two indices. With {% raw %}<span class="math inline">\(\binom nr=O(n^r)\)</span>{% endraw %} first subsets and Cauchy–Schwarz bounding every covariance by {% raw %}<span class="math inline">\(\mathbb{E}g^2\)</span>{% endraw %}, the residual variance is {% raw %}<span class="math inline">\(O(n^{-2})\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(\sqrt n R_n\to0\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %}, which justifies the stated Slutsky step.</p>
<div id="result-5" class="example" data-note-number="5" data-note-kind="Example">
<p><strong>Example 5</strong>.  The mean is a {% raw %}<span class="math inline">\(U\)</span>{% endraw %}-statistic of degree 1, and the kernel is {% raw %}<span class="math inline">\(h(X_i) = X_i\)</span>{% endraw %}. The {% raw %}<span class="math inline">\(U\)</span>{% endraw %}-statistic in closed form is {% raw %}<span class="math inline">\(\frac{1}{n} \sum_{1 \leq k \leq n} h(X_k)\)</span>{% endraw %}. The central limit theorem gives the usual asymptotic normality.</p>

</div>
<div id="result-6" class="example" data-note-number="6" data-note-kind="Example">
<p><strong>Example 6</strong>.  The variance is a {% raw %}<span class="math inline">\(U\)</span>{% endraw %}-statistic of degree 2, and the kernel is {% raw %}<span class="math inline">\(h(X_i, X_j) = \frac12 (X_i - X_j)^2\)</span>{% endraw %}. The {% raw %}<span class="math inline">\(U\)</span>{% endraw %}-statistic in closed form is {% raw %}<span class="math inline">\(\frac{1}{n-1} \sum_{1 \leq k \leq n} (X_k - \overline{X}_n)^2\)</span>{% endraw %}.</p>

</div>
<div id="result-7" class="example" data-note-number="7" data-note-kind="Example">
<p><strong>Example 7</strong> (Signed Ranked Statistic).  Let {% raw %}<span class="math inline">\(\theta = \mathop{\mathrm{\mathbf{P}}}(X_1 + X_2 &gt; 0)\)</span>{% endraw %} be the parameter of interest. The corresponding kernel function is {% raw %}<span class="math inline">\(h(x,y) = \mathbb 1 \set{x+y &gt; 0}\)</span>{% endraw %} . The {% raw %}<span class="math inline">\(U\)</span>{% endraw %}-statistic is </p>

{% raw %}<div class="math display">\[\begin{aligned}
        U = \frac{1}{\binom{n}{2}} \sum_{1 \leq j \leq n} \sum_{i &lt; j} \mathbb 1 \set{X_i + X_j &gt; 0}
    
\end{aligned}\]</div>{% endraw %}
<p> This tests if the distribution of observations is located at (or around) zero.</p>


<p>For the variance example, the algebra behind the closed form is</p>
{% raw %}<div class="math display">\[\sum_{i&lt;j}(X_i-X_j)^2=n\sum_i X_i^2-\left(\sum_iX_i\right)^2=n\sum_i(X_i-\bar X_n)^2.\]</div>{% endraw %}
<p>Dividing by {% raw %}<span class="math inline">\(2\binom n2=n(n-1)\)</span>{% endraw %} gives the usual unbiased sample variance. Its expectation exists under a finite second moment. Applying the general normal-limit result to this kernel additionally requires a finite fourth moment and a positive first-projection variance.</p>
<p>For the signed-rank kernel, {% raw %}<span class="math inline">\(h_1(x)=1-F(-x)-\theta\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(\zeta_1=\operatorname{Var}(F(-X_1))\)</span>{% endraw %}. The null {% raw %}<span class="math inline">\(\theta=1/2\)</span>{% endraw %} alone does not determine this variance. Suppose instead that {% raw %}<span class="math inline">\(F\)</span>{% endraw %} is continuous and symmetric about zero. Then {% raw %}<span class="math inline">\(F(-x)=1-F(x)\)</span>{% endraw %}, {% raw %}<span class="math inline">\(F(X_1)\sim\operatorname{Unif}(0,1)\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\theta=1/2,\ \zeta_1=1/12\)</span>{% endraw %}. The projection result gives</p>

{% raw %}<div class="math display">\[\sqrt{3n}(U-1/2)\Rightarrow \mathcal{N}(0,1).\]</div>{% endraw %}<p>Thus the one-sided test rejecting above {% raw %}<span class="math inline">\(z_{1-\alpha}=\Phi^{-1}(1-\alpha)\)</span>{% endraw %} has asymptotic level {% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} for each continuous symmetric null distribution.</p>

<p>To relate this to Wilcoxon’s statistic, let {% raw %}<span class="math inline">\(R_i^+=\#\{j:|X_j|\leq|X_i|\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(W^+=\sum_iR_i^+1_{\{X_i&gt;0\}}\)</span>{% endraw %}. With no zero observations or ties in absolute value, each unordered pair contributes one to {% raw %}<span class="math inline">\(W^+\)</span>{% endraw %} exactly when the observation with larger absolute value is positive, which is equivalent to the pair sum being positive. The diagonal terms contribute the number of positive observations. Hence</p>

{% raw %}<div class="math display">\[W^+=\binom n2U+\sum_i1_{\{X_i&gt;0\}},\qquad \mathbb{E}W^+=\frac{n(n+1)}4,\qquad n^{-3/2}(W^+-\mathbb{E}W^+)\Rightarrow \mathcal{N}(0,1/12).\]</div>{% endraw %}<p>Under the continuous symmetric null, conditional on the absolute values the signs are independent fair signs. This also proves the exact distribution-free representation {% raw %}<span class="math inline">\(W^+\overset d=\sum_{j=1}^njB_j\)</span>{% endraw %} with independent {% raw %}<span class="math inline">\(B_j\sim\operatorname{Bernoulli}(1/2)\)</span>{% endraw %}.</p>

</div>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-05-02-central-limit-theorem-with-random-number-of-summands %}">Central Limit Theorem with Random Number of Summands</a> · Next: <a href="{% post_url 2022-06-10-nonparametric-inference-for-the-mean %}">Nonparametric Inference for the Mean</a></p></nav>

</div>
