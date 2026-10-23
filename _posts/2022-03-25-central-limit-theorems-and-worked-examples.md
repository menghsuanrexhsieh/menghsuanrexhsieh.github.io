---
layout: "post"
title: "Central Limit Theorems and Worked Examples"
date: "2022-03-25"
tags: ["probability theory", "statistics"]
excerpt: "Independent-array and martingale central limit theorems, conditional Lindeberg criteria, and worked examples."
note_series: "Probability and statistics"
note_source: "assets/notes/Overleaf Projects (32 items)/Statistics and Prob Theory - Notes/stats.tex"
redirect_from: ["/2022/03/25/central-limit-theorems/", "/2022/04/13/examples-of-central-limit-arguments/"]
---

<div class="note-content" markdown="0">

<p>A central limit theorem needs both a scale and a reason that no small part of the sum dominates that scale. For independent arrays, Lindeberg’s condition controls the variance carried by large summands. For martingales, the corresponding variance is conditional on the past. The examples below show how these conditions enter a permutation statistic and an autoregressive estimator.</p>

<div id="central-limit-theorems" data-note-section="title">

</div>
<div id="thm:lindeberg-levy" class="theorem" data-note-number="1" data-note-kind="Theorem">
<p><strong>Theorem 1</strong> (Lindeberg–Lévy). Let {% raw %}<span class="math inline">\((X_i)_{i\geq1}\)</span>{% endraw %} be i.i.d. with mean {% raw %}<span class="math inline">\(m\)</span>{% endraw %} and variance {% raw %}<span class="math inline">\(0&lt;\sigma^2&lt;\infty\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(S_n=\sum_{i=1}^nX_i\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\frac{1}{\sqrt{n}} \frac{S_n - nm}{\sigma} \xrightarrow{d} \mathcal{N}(0,1) ~.\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof from Theorem 2 below.</em> Apply the independent-array theorem to {% raw %}<span class="math inline">\(Y_{n,k}=(X_k-m)/(\sigma\sqrt n)\)</span>{% endraw %}, whose total variance is one. For each {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, its Lindeberg sum is</p>
{% raw %}<div class="math display">\[\sum_{k=1}^n\mathbb{E}[Y_{n,k}^2 1_{\{|Y_{n,k}|&gt;\varepsilon\}}]=\frac1{\sigma^2}\mathbb{E}[(X_1-m)^2 1_{\{|X_1-m|&gt;\varepsilon\sigma\sqrt n\}}]\longrightarrow0.\]</div>{% endraw %}
<p>Dominated convergence applies because the dominating square has finite expectation. Theorem 2 therefore proves the result. ◻</p>
</div>
<p>When the summands change with sample size, the i.i.d. theorem no longer applies directly. A triangular array keeps track of this dependence on sample size. Consider random variables </p>

{% raw %}<div class="math display">\[X_{n,1}, \dots, X_{n, r_n} ~,\]</div>{% endraw %}
<p> where {% raw %}<span class="math inline">\(r_n\)</span>{% endraw %} changes with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. This is known as a <em>triangular array</em> of random variables (though there are disputes about terminology; for instance, most texts only use the case {% raw %}<span class="math inline">\(r_n = n\)</span>{% endraw %} when defining triangular arrays, and all other choices of {% raw %}<span class="math inline">\(r_n\)</span>{% endraw %} are called <em>double arrays</em>). We require that for each {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, the sequence above is a collection of independent random variables. For each {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, adopt the following notations: </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E} X_{n,k} &amp;= 0 ~, \\
    \sigma_n^2 &amp;= \sum_{1 \leq k \leq r_n} \sigma_{n,k}^2 \triangleq \sum_{1 \leq k \leq r_n} \mathbb{E} X_{n,k}^2 ~.
\end{aligned}\]</div>{% endraw %}
<p> Assume throughout that the row variances are finite and {% raw %}<span class="math inline">\(\sigma_n^2>0\)</span>{% endraw %}. That the mean of each {% raw %}<span class="math inline">\(X_{n,k}\)</span>{% endraw %} is zero is without loss of generality. To establish the asymptotic normality of {% raw %}<span class="math inline">\(S_n = \sum_{1 \leq k \leq r_n} X_{n,k}\)</span>{% endraw %}, we need to expand the characteristic function of each {% raw %}<span class="math inline">\(X_{n,k}\)</span>{% endraw %}, to the second order term, and estimate the remaining terms. The remainder is controlled by splitting the summands into small values and values large relative to the total standard deviation.</p>

<div id="thm:lindeberg-clt" class="theorem" data-note-number="2" data-note-kind="Theorem">
<p><strong>Theorem 2</strong> (Lindeberg).  Suppose, for each {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X_{n,1},\dots,X_{n,r_n}\)</span>{% endraw %} is independent, and satisfies the <em>Lindeberg condition</em> </p>

{% raw %}<div class="math display">\[\lim\limits_{n\to\infty} \sum_{1 \leq k \leq r_n} \frac{1}{\sigma_n^2} \mathbb{E} [X_{n,k}^2 \mathbb 1 \{ |X_{n,k}| \geq \varepsilon \sigma_n \}] = 0\]</div>{% endraw %}
<p> for any {% raw %}<span class="math inline">\(\varepsilon &gt; 0\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\frac{S_n}{\sigma_n} \xrightarrow{d} \mathcal{N} (0,1)\)</span>{% endraw %}.</p>

</div>

<div class="proof">
<p><em>Proof.</em></p>

<p>Assume {% raw %}<span class="math inline">\(\sigma_n&gt;0\)</span>{% endraw %} and divide the row by {% raw %}<span class="math inline">\(\sigma_n\)</span>{% endraw %} so that its total variance is one. Write {% raw %}<span class="math inline">\(v_{n,k}=\mathbb{E}X_{n,k}^2\)</span>{% endraw %}. Taylor’s formula gives</p>

{% raw %}<div class="math display">\[|e^{iu}-1-iu+u^2/2|\leq C\min(|u|^2,|u|^3).\]</div>{% endraw %}<p>Consequently, for fixed {% raw %}<span class="math inline">\(t\)</span>{% endraw %} and any {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\sum_k\left|Ee^{itX_{n,k}}-\left(1-\frac{t^2v_{n,k}}2\right)\right|\leq C_t\left(\varepsilon+\sum_k\mathbb{E}X_{n,k}^21_{\{|X_{n,k}|&gt;\varepsilon\}}\right).\]</div>{% endraw %}<p>Take {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} first and then {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %}. Also {% raw %}<span class="math inline">\(\max_kv_{n,k}\leq\varepsilon^2+\sum_k\mathbb{E}X_{n,k}^21_{\{|X_{n,k}|&gt;\varepsilon\}}\to0\)</span>{% endraw %} in the same order. For large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, the quadratic factors lie in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. Telescoping products bounds the difference between the characteristic function of the row sum and {% raw %}<span class="math inline">\(\prod_k(1-t^2v_{n,k}/2)\)</span>{% endraw %} by the preceding sum of errors. Finally,</p>

{% raw %}<div class="math display">\[\sum_k\log(1-t^2v_{n,k}/2)=-t^2/2+O_t\left(\sum_kv_{n,k}^2\right)\longrightarrow-t^2/2,\]</div>{% endraw %}<p>because {% raw %}<span class="math inline">\(\sum_kv_{n,k}^2\leq\max_kv_{n,k}\)</span>{% endraw %}. The characteristic functions converge to {% raw %}<span class="math inline">\(e^{-t^2/2}\)</span>{% endraw %}, which proves the theorem.</p>

<p>◻</p>

</div>

<div id="result-3" class="example" data-note-number="3" data-note-kind="Example">
<p><strong>Example 3</strong>. Let {% raw %}<span class="math inline">\((X_i)\)</span>{% endraw %} be i.i.d., centered, with variance {% raw %}<span class="math inline">\(0&lt;\sigma^2&lt;\infty\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(T_n=n^{-1/2}\sum_{i=1}^na_iX_i\)</span>{% endraw %}, {% raw %}<span class="math inline">\(s_n=(\sum_{i=1}^na_i^2)^{1/2}&gt;0\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(m_n=\max_{i\leq n}|a_i|\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(m_n/s_n\to0\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(T_n/(\sigma s_n/\sqrt n)\Rightarrow \mathcal{N}(0,1)\)</span>{% endraw %}.</p>

</div>
<p>The normalized summands are {% raw %}<span class="math inline">\(a_iX_i/(\sigma s_n)\)</span>{% endraw %}. Their Lindeberg sum is bounded by</p>

{% raw %}<div class="math display">\[\sum_i\frac{a_i^2}{\sigma^2s_n^2}\mathbb{E}\left[X_i^21_{\{|a_iX_i|&gt;\varepsilon\sigma s_n\}}\right]\leq\frac1{\sigma^2}\mathbb{E}\left[X_1^21_{\{|X_1|&gt;\varepsilon\sigma s_n/m_n\}}\right]\longrightarrow0.\]</div>{% endraw %}<p>The threshold tends to infinity and {% raw %}<span class="math inline">\(\mathbb{E}X_1^2&lt;\infty\)</span>{% endraw %}, so dominated convergence applies.</p>

<p>Lindeberg’s condition controls the contribution of unusually large summands to the total variance. A higher-moment bound can be easier to check: Lyapunov’s condition gives sufficient tail control by a single moment estimate.</p>

<div id="thm:lyapunov-clt" class="theorem" data-note-number="4" data-note-kind="Theorem">
<p><strong>Theorem 4</strong> (Lyapunov).  Suppose, for each {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(X_{n,1},\dots,X_{n,r_n}\)</span>{% endraw %} is independent, and satisfies the <em>Lyapunov condition</em> </p>

{% raw %}<div class="math display">\[\lim\limits_{n\to\infty} \sum_{1 \leq k \leq r_n} \frac{1}{\sigma_n^{2+\delta}} \mathbb{E} |X_{n,k}|^{2+\delta} = 0\]</div>{% endraw %}
<p> for some {% raw %}<span class="math inline">\(\delta &gt; 0\)</span>{% endraw %}. Then, {% raw %}<span class="math inline">\(\frac{S_n}{\sigma_n} \xrightarrow{d} \mathcal{N} (0,1)\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em></p>

<p>On {% raw %}<span class="math inline">\(|X_{n,k}|\geq\varepsilon\sigma_n\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(X_{n,k}^2\leq|X_{n,k}|^{2+\delta}/(\varepsilon\sigma_n)^\delta\)</span>{% endraw %}. Hence</p>

{% raw %}<div class="math display">\[\frac1{\sigma_n^2}\sum_k\mathbb{E}X_{n,k}^21_{\{|X_{n,k}|\geq\varepsilon\sigma_n\}}\leq\frac1{\varepsilon^\delta\sigma_n^{2+\delta}}\sum_k\mathbb{E}|X_{n,k}|^{2+\delta}\longrightarrow0.\]</div>{% endraw %}<p>Lindeberg’s theorem applies.</p>

<p>◻</p>

</div>
<p>A martingale-difference condition removes predictable means. It does not force the accumulated conditional variance to approach a constant, as the following example shows.</p>



<div id="result-5" class="example" data-note-number="5" data-note-kind="Example">
<p><strong>Example 5</strong>. Let {% raw %}<span class="math inline">\((\Delta_i)_{i\geq1}\)</span>{% endraw %} be independent random signs. Put {% raw %}<span class="math inline">\(W=1_{\{\Delta_1=1\}}+2\,1_{\{\Delta_1=-1\}}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(X_n=W\sum_{k=2}^n\Delta_k\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(\mathcal F_n=\sigma(\Delta_1,\ldots,\Delta_n)\)</span>{% endraw %}, {% raw %}<span class="math inline">\((X_n)\)</span>{% endraw %} is a martingale. Conditional on {% raw %}<span class="math inline">\(W\)</span>{% endraw %}, the ordinary CLT applies to the remaining signs, so {% raw %}<span class="math inline">\(X_n/\sqrt n\)</span>{% endraw %} converges to {% raw %}<span class="math inline">\(\frac12\mathcal{N}(0,1)+\frac12\mathcal{N}(0,4)\)</span>{% endraw %}. The random conditional variance prevents a single normal limit.</p>

</div>
<p>For a square-integrable martingale {% raw %}<span class="math inline">\((X_n,\mathcal F_n)\)</span>{% endraw %} with {% raw %}<span class="math inline">\(X_0=0\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(Y_n=X_n-X_{n-1}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(v_n=\mathbb E[Y_n^2\mid\mathcal F_{n-1}]\)</span>{% endraw %}. The accumulated conditional variance is {% raw %}<span class="math inline">\(\sum_{k\leq n}v_k\)</span>{% endraw %}. The finite-row theorem below assumes that this quantity converges after normalisation and controls large increments separately. A random limit for the conditional variance generally gives a different limiting law, as in Example 5.</p>

{% raw %}<div class="math display">\[\sigma_n^2=\mathbb{E}[Y_n^2\mid\mathcal F_{n-1}],\qquad v_t=\inf\left\{n\geq1:\sum_{k=1}^n\sigma_k^2\geq t\right\},\]</div>{% endraw %}
<p>with the infimum equal to infinity if the level is never reached. This is a stopping time because the partial conditional-variance sums are adapted. A normal limit at this random time requires control of large jumps, the variance overshoot, and finiteness of the stopping time. The following theorem states explicit sufficient conditions directly for finite rows of martingale differences.</p>
<span id="as:mclt-1"></span><span id="as:mclt-2"></span><span id="eq:II-46"></span><span id="eq:II-52"></span><span id="eq:II-54"></span><span id="eq:II-58"></span>
<div id="thm:martingale-clt" class="theorem" data-note-number="6" data-note-kind="Theorem">
<p><strong>Theorem 6</strong>. (Martingale CLT, finite rows). Let {% raw %}<span class="math inline">\(Y_{n,k},\ 1\leq k\leq r_n\)</span>{% endraw %} be square-integrable martingale differences for {% raw %}<span class="math inline">\((\mathcal F_{n,k})\)</span>{% endraw %}: {% raw %}<span class="math inline">\(\mathbb{E}[Y_{n,k}\mid\mathcal F_{n,k-1}]=0\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(v_{n,k}=\mathbb{E}[Y_{n,k}^2\mid\mathcal F_{n,k-1}]\)</span>{% endraw %}. Suppose</p>

</div>
{% raw %}<div class="math display">\[V_n=\sum_{k=1}^{r_n}v_{n,k}\xrightarrow{P}\sigma^2&gt;0,\qquad \sum_{k=1}^{r_n}\mathbb{E}[Y_{n,k}^21_{\{|Y_{n,k}|&gt;\varepsilon\}}]\longrightarrow0\quad(\varepsilon&gt;0).\]</div>{% endraw %}<p>Then {% raw %}<span class="math inline">\(\sum_{k=1}^{r_n}Y_{n,k}\Rightarrow \mathcal{N}(0,\sigma^2)\)</span>{% endraw %}. One may append zero increments after {% raw %}<span class="math inline">\(r_n\)</span>{% endraw %} without changing the assertion.</p>

<div class="proof">
<p><em>Proof.</em></p>

<p>First suppose {% raw %}<span class="math inline">\(V_n\leq c\)</span>{% endraw %} almost surely. Suppress {% raw %}<span class="math inline">\(n\)</span>{% endraw %} and put {% raw %}<span class="math inline">\(S_k=\sum_{j\leq k}Y_j\)</span>{% endraw %}, {% raw %}<span class="math inline">\(V_k=\sum_{j\leq k}v_j\)</span>{% endraw %}. The process {% raw %}<span class="math inline">\(Z_k=\exp(itS_k+t^2V_k/2)\)</span>{% endraw %} satisfies</p>

{% raw %}<div class="math display">\[\mathbb{E}(Z_k-Z_{k-1})=\mathbb{E}\left[e^{itS_{k-1}+t^2V_k/2}\{\mathbb{E}[e^{itY_k}\mid\mathcal F_{k-1}]-e^{-t^2v_k/2}\}\right].\]</div>{% endraw %}<p>Here {% raw %}<span class="math inline">\(S_{k-1}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V_k\)</span>{% endraw %} are {% raw %}<span class="math inline">\(\mathcal F_{k-1}\)</span>{% endraw %}-measurable. Conditional centering and the same Taylor remainder as in Theorem 2 give</p>
{% raw %}<div class="math display">\[\left|\mathbb{E}[e^{itY_k}\mid\mathcal F_{k-1}]-(1-t^2v_k/2)\right|\leq C_t\left(\mathbb{E}[Y_k^2 1_{\{|Y_k|&gt;\varepsilon\}}\mid\mathcal F_{k-1}]+\varepsilon v_k\right).\]</div>{% endraw %}
<p>Also {% raw %}<span class="math inline">\(|e^{-t^2v_k/2}-(1-t^2v_k/2)|\leq C_t v_k^2\)</span>{% endraw %}. The multiplier in the preceding telescoping identity has modulus at most {% raw %}<span class="math inline">\(e^{t^2c/2}\)</span>{% endraw %}. </p>
<p>Conditional Taylor expansion, centering, and {% raw %}<span class="math inline">\(V_k\leq c\)</span>{% endraw %} bound the sum of the absolute expectations by</p>

{% raw %}<div class="math display">\[C_{t,c}\left(\sum_k\mathbb{E}Y_k^21_{\{|Y_k|&gt;\varepsilon\}}+\varepsilon\sum_k\mathbb E v_k+\sum_k\mathbb E v_k^2\right).\]</div>{% endraw %}<p>Here {% raw %}<span class="math inline">\(\sum_k\mathbb E v_k\leq c\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\sum_k\mathbb E v_k^2\leq c\mathbb{E}\max_kv_k\)</span>{% endraw %}. Also,</p>

{% raw %}<div class="math display">\[\mathbb{E}\max_kv_k\leq\varepsilon^2+\sum_k\mathbb{E}Y_k^21_{\{|Y_k|&gt;\varepsilon\}}.\]</div>{% endraw %}<p>Taking {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} proves {% raw %}<span class="math inline">\(\mathbb{E}Z_{r_n}\to1\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(V_n\to\sigma^2\)</span>{% endraw %} in probability and {% raw %}<span class="math inline">\(|Z_{r_n}|\leq e^{t^2c/2}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\left|\mathbb E e^{itS_{r_n}}-e^{-t^2\sigma^2/2}\mathbb{E}Z_{r_n}\right|\leq e^{t^2c/2}\mathbb{E}\left|e^{-t^2V_n/2}-e^{-t^2\sigma^2/2}\right|\longrightarrow0.\]</div>{% endraw %}<p>This proves characteristic-function convergence in the bounded case.</p>

<p>For the general case choose {% raw %}<span class="math inline">\(c&gt;\sigma^2\)</span>{% endraw %} and replace {% raw %}<span class="math inline">\(Y_{n,k}\)</span>{% endraw %} by {% raw %}<span class="math inline">\(\widetilde Y_{n,k}=Y_{n,k}1_{\{\sum_{j\leq k}v_{n,j}\leq c\}}\)</span>{% endraw %}. The indicator is {% raw %}<span class="math inline">\(\mathcal F_{n,k-1}\)</span>{% endraw %}-measurable. The new total conditional variance is at most {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, its Lindeberg sums do not increase, and it agrees with {% raw %}<span class="math inline">\(V_n\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{V_n\leq c\}\)</span>{% endraw %}, an event whose probability tends to one. The bounded case applies. The original and truncated sums agree on that same event, proving the result.</p>

<p>◻</p>

</div>
<h2 id="conditional-martingale-clt">Conditional Lindeberg and Lyapunov conditions</h2>
<p><strong>Corollary (conditional martingale CLT).</strong> Under the martingale-difference and square-integrability assumptions of Theorem 6, suppose</p>

{% raw %}<div class="math display">\[V_n=\sum_{k=1}^{r_n}\mathbb E[Y_{n,k}^2\mid\mathcal F_{n,k-1}]\xrightarrow{P}\sigma^2\in[0,\infty),\]</div>{% endraw %}

<p>and, for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[L_n(\varepsilon)=\sum_{k=1}^{r_n}\mathbb E[Y_{n,k}^2\mathbf1_{\{|Y_{n,k}|&gt;\varepsilon\}}\mid\mathcal F_{n,k-1}]\xrightarrow{P}0.\]</div>{% endraw %}

<p>Then {% raw %}<span class="math inline">\(\sum_kY_{n,k}\Rightarrow\mathcal N(0,\sigma^2)\)</span>{% endraw %}, with the degenerate law at zero when {% raw %}<span class="math inline">\(\sigma^2=0\)</span>{% endraw %}.</p>

<p><strong>Proof.</strong> Suppose first that {% raw %}<span class="math inline">\(\sigma^2&gt;0\)</span>{% endraw %}. A diagonal choice gives deterministic sequences {% raw %}<span class="math inline">\(\varepsilon_n,\delta_n\downarrow0\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\mathbb P(L_n(\varepsilon_n)&gt;\delta_n)\to0\)</span>{% endraw %}: choose integers {% raw %}<span class="math inline">\(N_j\uparrow\infty\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\mathbb P(L_n(1/j)&gt;1/j)\leq1/j\)</span>{% endraw %} for {% raw %}<span class="math inline">\(n\geq N_j\)</span>{% endraw %}, and use {% raw %}<span class="math inline">\(\varepsilon_n=\delta_n=1/j\)</span>{% endraw %} when {% raw %}<span class="math inline">\(N_j\leq n&lt;N_{j+1}\)</span>{% endraw %}. Write</p>

{% raw %}<div class="math display">\[\ell_{n,k}=\mathbb E[Y_{n,k}^2\mathbf1_{\{|Y_{n,k}|&gt;\varepsilon_n\}}\mid\mathcal F_{n,k-1}],\qquad
I_{n,k}=\mathbf1_{\{\sum_{j\leq k}v_{n,j}\leq c,\ \sum_{j\leq k}\ell_{n,j}\leq\delta_n\}},\]</div>{% endraw %}

<p>where {% raw %}<span class="math inline">\(c&gt;\sigma^2\)</span>{% endraw %}. Each indicator is {% raw %}<span class="math inline">\(\mathcal F_{n,k-1}\)</span>{% endraw %}-measurable, so {% raw %}<span class="math inline">\(\widetilde Y_{n,k}=I_{n,k}Y_{n,k}\)</span>{% endraw %} is a martingale difference. Since both cumulative sums are nondecreasing, the retained conditional variance is at most {% raw %}<span class="math inline">\(c\)</span>{% endraw %}, and the retained sum of the {% raw %}<span class="math inline">\(\ell_{n,k}\)</span>{% endraw %} is at most {% raw %}<span class="math inline">\(\delta_n\)</span>{% endraw %}. For fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, eventually {% raw %}<span class="math inline">\(\varepsilon_n\leq\varepsilon\)</span>{% endraw %}, whence</p>

{% raw %}<div class="math display">\[\sum_k\mathbb E[\widetilde Y_{n,k}^2\mathbf1_{\{|\widetilde Y_{n,k}|&gt;\varepsilon\}}]
\leq\mathbb E\sum_kI_{n,k}\ell_{n,k}\leq\delta_n.\]</div>{% endraw %}

<p>On {% raw %}<span class="math inline">\(\{V_n\leq c,\ L_n(\varepsilon_n)\leq\delta_n\}\)</span>{% endraw %}, all indicators are one. This event has probability tending to one, so the retained conditional variance still converges in probability to {% raw %}<span class="math inline">\(\sigma^2\)</span>{% endraw %}. Theorem 6 applies to the retained array. The two row sums agree with probability tending to one, which proves the assertion.</p>

<p>If {% raw %}<span class="math inline">\(\sigma^2=0\)</span>{% endraw %}, retain only increments for which {% raw %}<span class="math inline">\(\sum_{j\leq k}v_{n,j}\leq c\)</span>{% endraw %}, with any fixed {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}. Orthogonality gives a second moment at most {% raw %}<span class="math inline">\(c\)</span>{% endraw %} for the retained sum. Thus</p>

{% raw %}<div class="math display">\[\mathbb P\left(\left|\sum_kY_{n,k}\right|&gt;\eta\right)
\leq\mathbb P(V_n&gt;c)+c/\eta^2.\]</div>{% endraw %}

<p>Let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} and then {% raw %}<span class="math inline">\(c\downarrow0\)</span>{% endraw %}. The sum tends to zero in probability; no Lindeberg assumption is needed in this degenerate case. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>

<p>A sufficient condition for conditional Lindeberg is, for some {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\sum_k\mathbb E[|Y_{n,k}|^{2+\delta}\mid\mathcal F_{n,k-1}]\xrightarrow{P}0.\]</div>{% endraw %}

<p>Indeed, {% raw %}<span class="math inline">\(L_n(\varepsilon)\)</span>{% endraw %} is bounded by {% raw %}<span class="math inline">\(\varepsilon^{-\delta}\)</span>{% endraw %} times this sum. This conditional Lyapunov criterion permits predictable, random moment bounds; no convergence of their expectations is required.</p>
<h3 data-note-section="1" id="examples">1. Examples</h3>

<div id="result-7" class="example" data-note-number="7" data-note-kind="Example">
<p><strong>Example 7</strong>. (Inversions). Let {% raw %}<span class="math inline">\((a_1,\ldots,a_n)\)</span>{% endraw %} be a uniform permutation and let {% raw %}<span class="math inline">\(I_n=\sum_{i&lt;j}1_{\{a_i&gt;a_j\}}\)</span>{% endraw %}. Define {% raw %}<span class="math inline">\(Y_j=\#\{i&lt;j:a_i&gt;a_j\}\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(I_n=\sum_jY_j\)</span>{% endraw %}.</p>

</div>
<p>The rank of the {% raw %}<span class="math inline">\(j\)</span>{% endraw %}th entry among the first {% raw %}<span class="math inline">\(j\)</span>{% endraw %} entries is {% raw %}<span class="math inline">\(j-Y_j\)</span>{% endraw %}. Every sequence of ranks with the {% raw %}<span class="math inline">\(j\)</span>{% endraw %}th rank in {% raw %}<span class="math inline">\(\{1,\ldots,j\}\)</span>{% endraw %} determines exactly one permutation: insert position {% raw %}<span class="math inline">\(j\)</span>{% endraw %} in the prescribed place in the ordered list of previous positions, and finally assign values by order. Thus the {% raw %}<span class="math inline">\(n!=\prod_{j=1}^nj\)</span>{% endraw %} possible rank sequences are equally likely. This proves that the {% raw %}<span class="math inline">\(Y_j\)</span>{% endraw %} are independent, each uniform on {% raw %}<span class="math inline">\(\{0,\ldots,j-1\}\)</span>{% endraw %}.</p>

{% raw %}<div class="math display">\[\mathbb{E}Y_j=\frac{j-1}{2},\quad \operatorname{Var}(Y_j)=\frac{j^2-1}{12},\quad \mathbb{E}I_n=\frac{n(n-1)}4,\quad s_n^2=\operatorname{Var}(I_n)=\frac{n(n-1)(2n+5)}{72}.\]</div>{% endraw %}<p>The summands are independent but not identically distributed. Since {% raw %}<span class="math inline">\(|Y_j-\mathbb{E}Y_j|\leq n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(s_n\sim n^{3/2}/6\)</span>{% endraw %}, every Lindeberg indicator is zero for sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. The independent-array theorem gives</p>

{% raw %}<div class="math display">\[\frac{I_n-n(n-1)/4}{s_n}\Rightarrow \mathcal{N}(0,1),\qquad \frac{3\sqrt n}{2}\left(\frac{4I_n}{n^2}-1\right)\Rightarrow \mathcal{N}(0,1).\]</div>{% endraw %}<p>The second statement follows from the first because the difference in centering is {% raw %}<span class="math inline">\(3/(2\sqrt n)\)</span>{% endraw %} and the ratio of the two scales tends to one.</p>


<div id="result-8" class="example" data-note-number="8" data-note-kind="Example">
<p><strong>Example 8</strong>. (AR(1)). Let {% raw %}<span class="math inline">\(X_0=0,\ X_k=\rho X_{k-1}+E_k\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(|\rho|&lt;1\)</span>{% endraw %} and the innovations are i.i.d., centered, with {% raw %}<span class="math inline">\(0&lt;\omega^2=EE_1^2&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(|E_k|\leq c\)</span>{% endraw %}. Each {% raw %}<span class="math inline">\(E_k\)</span>{% endraw %} is independent of {% raw %}<span class="math inline">\(\mathscr F_{k-1}=\sigma(E_1,\ldots,E_{k-1})\)</span>{% endraw %}, hence of the past observations; it is not independent of the whole process.</p>

</div>
<p>The least-squares estimator and its error are</p>

{% raw %}<div class="math display">\[\widehat\rho_n=\frac{\sum_{k=1}^nX_kX_{k-1}}{\sum_{k=1}^nX_{k-1}^2},\qquad (\widehat\rho_n-\rho)\sum_{k=1}^nX_{k-1}^2=S_n:=\sum_{k=1}^nE_kX_{k-1}.\]</div>{% endraw %}<p>Set the estimator to zero if its denominator vanishes; the denominator limit below makes this event negligible. Iterating the recursion gives {% raw %}<span class="math inline">\(X_k=\sum_{j=1}^k\rho^{k-j}E_j\)</span>{% endraw %}. Hence {% raw %}<span class="math inline">\(|X_k|\leq C:=c/(1-|\rho|)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}X_k^2=\omega^2\sum_{j=0}^{k-1}\rho^{2j}\to v:=\omega^2/(1-\rho^2)\)</span>{% endraw %}.</p>

<p>For {% raw %}<span class="math inline">\(\ell&gt;k\)</span>{% endraw %}, write {% raw %}<span class="math inline">\(X_\ell=\rho^{\ell-k}X_k+R_{\ell,k}\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(R_{\ell,k}\)</span>{% endraw %} is centered and independent of {% raw %}<span class="math inline">\(\mathscr F_k\)</span>{% endraw %}. Expanding the squares gives</p>

{% raw %}<div class="math display">\[\operatorname{Cov}(X_k^2,X_\ell^2)=\rho^{2(\ell-k)}\operatorname{Var}(X_k^2),\qquad \operatorname{Var}\left(\frac1n\sum_{k=1}^nX_{k-1}^2\right)\leq\frac{C^4}{n}\left(1+2\sum_{j\geq1}|\rho|^{2j}\right).\]</div>{% endraw %}<p>The expectation converges to {% raw %}<span class="math inline">\(v\)</span>{% endraw %} by Cesàro averaging and the variance tends to zero. Thus {% raw %}<span class="math inline">\(n^{-1}\sum_kX_{k-1}^2\to v\)</span>{% endraw %} in probability.</p>

<p>Now {% raw %}<span class="math inline">\(Y_{n,k}=E_kX_{k-1}/\sqrt{nv\omega^2}\)</span>{% endraw %} is a martingale difference array. Its total conditional variance is {% raw %}<span class="math inline">\((nv)^{-1}\sum_kX_{k-1}^2\to1\)</span>{% endraw %}. Its increments are bounded by {% raw %}<span class="math inline">\(cC/\sqrt{nv\omega^2}\)</span>{% endraw %}, so the Lindeberg condition holds with zero tail terms for large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Applying Theorem 6 and then Slutsky gives</p>

{% raw %}<div class="math display">\[\frac{S_n}{\sqrt{nv\omega^2}}\Rightarrow \mathcal{N}(0,1),\qquad \sqrt{\frac{n}{1-\rho^2}}(\widehat\rho_n-\rho)\Rightarrow \mathcal{N}(0,1).\]</div>{% endraw %}<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2022-06-29-moment-inequalities-and-random-series %}">Moment Inequalities and Random Series</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2022-01-26-martingales %}">Martingales</a> · Next: <a href="{% post_url 2022-05-02-central-limit-theorem-with-random-number-of-summands %}">Central Limit Theorem with Random Number of Summands</a></p></nav>

</div>
