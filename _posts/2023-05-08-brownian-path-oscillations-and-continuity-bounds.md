---
layout: "post"
title: "Brownian Path Oscillations and Continuity Bounds"
date: "2023-05-08"
tags: ["probability theory", "stochastic processes"]
excerpt: "Brownian moduli of continuity, iterated logarithms, infinite variation, and localisation."
note_series: "Stochastic processes"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Some Stochastic Processes/stats.tex"
redirect_from: ["/2023/05/08/modulus-of-continuity/", "/2023/06/12/lack-of-monotonicity/", "/2023/07/18/kolmogorov-continuity-and-brownian-path-bounds/"]
---

<div class="note-content" markdown="0">

<p>Let {% raw %}<span class="math inline">\(B\)</span>{% endraw %} be a one-dimensional Brownian motion starting at zero. We establish its uniform modulus of continuity, nonmonotonicity, and the law of the iterated logarithm. The final section develops the stopping and finite-variation arguments used in stochastic integration.</p>


<div id="modulus-of-continuity" data-note-section="title">

</div>
<p>For {% raw %}<span class="math inline">\(f\in C[0,1]\)</span>{% endraw %}, define its modulus of continuity by</p>


{% raw %}<div class="math display">\[\begin{aligned}
    \omega_f (\delta) = \sup_{s,t \in [0,1]:|t-s|&lt;\delta} |f(t)-f(s)| ~.
\end{aligned}\]</div>{% endraw %}
<p>We prove matching asymptotic bounds for Brownian increments. The upper bound uses a finite grid and a pathwise approximation of the endpoints; the lower bound uses independent increments on disjoint intervals.</p>


<p>We first obtain an upper bound with an unspecified constant. For a dyadic interval {% raw %}<span class="math inline">\(I=[k2^{-n},(k+1)2^{-n}]\)</span>{% endraw %}, the exponential maximal inequality gives</p>

{% raw %}<div class="math display">\[\mathbb P\left(\sup_{t\in I}|B_t-B_{k2^{-n}}|&gt;K\sqrt{n2^{-n}}\right)\leq2e^{-K^2n/2}.\]</div>{% endraw %}

<p>There are {% raw %}<span class="math inline">\(2^n\)</span>{% endraw %} such intervals in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(K\)</span>{% endraw %} so that {% raw %}<span class="math inline">\(K^2/2&gt;\log2\)</span>{% endraw %}; the union bounds are then summable. Almost surely, all sufficiently fine dyadic intervals satisfy the indicated bound. If {% raw %}<span class="math inline">\(2^{-(n+1)}&lt;t-s\leq2^{-n}\)</span>{% endraw %}, the two points lie in the same or adjacent dyadic cells. Comparing through their endpoints gives {% raw %}<span class="math inline">\(|B_t-B_s|\leq3K\sqrt{n2^{-n}}\)</span>{% endraw %}. Consequently, for a deterministic constant {% raw %}<span class="math inline">\(C\)</span>{% endraw %}, almost surely</p>

{% raw %}<div class="math display">\[|B_t-B_s|\leq C\sqrt{|t-s|\log(1/|t-s|)}\]</div>{% endraw %}

<p>for all sufficiently small positive {% raw %}<span class="math inline">\(|t-s|\)</span>{% endraw %}, where the threshold may depend on the path.</p>

<p>To get a lower bound with the sharp constant, fix {% raw %}<span class="math inline">\(0&lt;c&lt;\sqrt2\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(h_n=e^{-n}\)</span>{% endraw %}, and consider the {% raw %}<span class="math inline">\(N_n=\lfloor e^n\rfloor\)</span>{% endraw %} disjoint increments of length {% raw %}<span class="math inline">\(h_n\)</span>{% endraw %} in {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. Each exceeds {% raw %}<span class="math inline">\(c\sqrt{nh_n}\)</span>{% endraw %} with probability {% raw %}<span class="math inline">\(p_n=\mathbb P(Z&gt;c\sqrt n)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} is standard normal. Integration of the Gaussian density over {% raw %}<span class="math inline">\([x,x+1/x]\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(p_n\geq c_1n^{-1/2}e^{-c^2n/2}\)</span>{% endraw %} for large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Independence within each row therefore gives</p>

{% raw %}<div class="math display">\[\mathbb P\left(\max_{0\leq k&lt;N_n}(B_{(k+1)h_n}-B_{kh_n})\leq c\sqrt{nh_n}\right)
=(1-p_n)^{N_n}\leq\exp\left[-c_2n^{-1/2}e^{(1-c^2/2)n}\right].\]</div>{% endraw %}

<p>Borel–Cantelli implies that such an increment exists for every sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, almost surely. Dividing by {% raw %}<span class="math inline">\(\sqrt{2h_n\log(1/h_n)}=\sqrt{2nh_n}\)</span>{% endraw %} gives a limiting lower bound {% raw %}<span class="math inline">\(c/\sqrt2\)</span>{% endraw %} along this sequence. A countable choice of {% raw %}<span class="math inline">\(c\uparrow\sqrt2\)</span>{% endraw %} proves that the limsup over all {% raw %}<span class="math inline">\(h\downarrow0\)</span>{% endraw %} is at least one.</p>


<p>For the sharp upper bound, a finer grid avoids losing a fixed constant when endpoints are approximated. Fix {% raw %}<span class="math inline">\(q&gt;1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0&lt;\delta&lt;1/4\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(c&gt;\sqrt{1+2\delta}\)</span>{% endraw %}. Set {% raw %}<span class="math inline">\(h_n=q^{-n}\)</span>{% endraw %}, and use a grid of spacing {% raw %}<span class="math inline">\(\delta h_n\)</span>{% endraw %}, including the endpoint {% raw %}<span class="math inline">\(1\)</span>{% endraw %}. There are at most {% raw %}<span class="math inline">\(C_\delta/h_n\)</span>{% endraw %} pairs of grid points whose separation is at most {% raw %}<span class="math inline">\((1+2\delta)h_n\)</span>{% endraw %}. A Gaussian tail bound and a union bound give</p>

{% raw %}<div class="math display">\[\mathbb P\left(\max_{\substack{u,v\text{ on the grid}\\|u-v|\leq(1+2\delta)h_n}}
|B_u-B_v|&gt;c\sqrt{2h_n\log(1/h_n)}\right)
\leq C_\delta h_n^{c^2/(1+2\delta)-1}.\]</div>{% endraw %}

<p>The exponent is positive, so this is summable in {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Approximate the endpoints of any interval of length at most {% raw %}<span class="math inline">\(h_n\)</span>{% endraw %} by grid points at distance at most {% raw %}<span class="math inline">\(\delta h_n\)</span>{% endraw %}. The coarse bound already proved controls the two endpoint errors. Almost surely, for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\sup_{|t-s|\leq h_n}|B_t-B_s|
\leq c\sqrt{2h_n\log(1/h_n)}+2C\sqrt{\delta h_n\log(1/(\delta h_n))}.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(h_n/q&lt;h\leq h_n\)</span>{% endraw %}, divide by {% raw %}<span class="math inline">\(\sqrt{2h\log(1/h)}\)</span>{% endraw %}. The resulting limiting upper bound is at most {% raw %}<span class="math inline">\(\sqrt q(c+\sqrt2 C\sqrt\delta)\)</span>{% endraw %}. Take a countable sequence of choices with {% raw %}<span class="math inline">\(\delta\downarrow0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(c\downarrow1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(q\downarrow1\)</span>{% endraw %}. Together with the lower bound this proves Lévy’s continuity theorem:</p>

{% raw %}<div class="math display">\[\limsup_{h\downarrow0}\sup_{0\leq t\leq1-h}\frac{|B_{t+h}-B_t|}{\sqrt{2h\log(1/h)}}=1\quad\text{almost surely}.\]</div>{% endraw %}

<h3 data-note-section="1" id="lack-of-monotonicity">1. Lack of Monotonicity</h3>
<p>A Brownian motion is not monotone on any interval {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(0 &lt; a &lt; b &lt; \infty\)</span>{% endraw %}, almost surely. To prove this, fix an interval {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(B_s\)</span>{% endraw %} is monotone on this interval, then for every partition {% raw %}<span class="math inline">\(a=a_1 &lt; a_2&lt; \dots &lt; a_{n+1} = b\)</span>{% endraw %}, the increments {% raw %}<span class="math inline">\(B_{a_{i+1}} - B_{a_i}\)</span>{% endraw %} all have the same sign. Independence between these increments implies that the probability all increments have the same sign equals {% raw %}<span class="math inline">\(2 \times 2^{-n}\)</span>{% endraw %}. Hence the probability of monotonicity on {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} is at most {% raw %}<span class="math inline">\(2\times2^{-n}\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, and is therefore zero. The conclusion holds for all intervals {% raw %}<span class="math inline">\([a,b]\)</span>{% endraw %} if we take a union over these intervals with rational endpoints. {% raw %}<span class="math inline">\(\blacksquare\)</span>{% endraw %}</p>

<h3 data-note-section="2" id="deviation">2. Deviation</h3>
<p>Brownian motion has arbitrarily large positive and negative fluctuations relative to {% raw %}<span class="math inline">\(\sqrt t\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[\limsup_{t\to\infty}\frac{B_t}{\sqrt t}=+\infty,
\qquad\liminf_{t\to\infty}\frac{B_t}{\sqrt t}=-\infty\quad\text{almost surely}.\]</div>{% endraw %}

<p>Apply the LIL below to {% raw %}<span class="math inline">\(B\)</span>{% endraw %} and {% raw %}<span class="math inline">\(-B\)</span>{% endraw %}, and use {% raw %}<span class="math inline">\(\sqrt{2\log\log t}\to\infty\)</span>{% endraw %}.</p>


<h3 data-note-section="3" id="sec:LIL">3. Law of Iterated Logarithm</h3>
<p><strong>Theorem (Law of the iterated logarithm).</strong> Almost surely,</p>

{% raw %}<div class="math display">\[\limsup_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=1,\qquad
\liminf_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=-1.\]</div>{% endraw %}

<p>The expressions are considered for {% raw %}<span class="math inline">\(t&gt;e\)</span>{% endraw %}. The upper bound uses a geometric grid with ratio close to one; the lower bound uses independent increments on a grid with a sufficiently large ratio.</p>


<p>For the upper bound at infinity, fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(q&gt;1\)</span>{% endraw %} close enough to one that {% raw %}<span class="math inline">\((1+\varepsilon)^2/q&gt;1\)</span>{% endraw %}. For all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, the maximal estimate above gives</p>

{% raw %}<div class="math display">\[\mathbb P\left(\sup_{s\leq q^n}|B_s|&gt;(1+\varepsilon)
\sqrt{2q^{n-1}\log\log q^{n-1}}\right)
\leq2\bigl((n-1)\log q\bigr)^{-(1+\varepsilon)^2/q}.\]</div>{% endraw %}

<p>The probabilities are summable. On {% raw %}<span class="math inline">\(q^{n-1}\leq t\leq q^n\)</span>{% endraw %}, the denominator {% raw %}<span class="math inline">\(\sqrt{2t\log\log t}\)</span>{% endraw %} is at least its value at the left endpoint, so Borel–Cantelli gives an eventual upper bound of {% raw %}<span class="math inline">\(1+\varepsilon\)</span>{% endraw %} for the ratio.</p>

<p>For the lower bound, take {% raw %}<span class="math inline">\(0&lt;\varepsilon&lt;1\)</span>{% endraw %} and now choose a new, sufficiently large {% raw %}<span class="math inline">\(q\)</span>{% endraw %} so that</p>

{% raw %}<div class="math display">\[a=\frac{(1-\varepsilon)^2}{1-q^{-1}}&lt;1,
\qquad 2q^{-1/2}&lt;\frac{\varepsilon}{2}.\]</div>{% endraw %}

<p>The events</p>

{% raw %}<div class="math display">\[E_n=\left\{B_{q^{n+1}}-B_{q^n}&gt;(1-\varepsilon)
\sqrt{2q^{n+1}\log\log q^{n+1}}\right\}\]</div>{% endraw %}

<p>are independent. For a standard normal variable {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} and {% raw %}<span class="math inline">\(x\geq1\)</span>{% endraw %}, integrating its density over {% raw %}<span class="math inline">\([x,x+1/x]\)</span>{% endraw %} gives {% raw %}<span class="math inline">\(\mathbb P(Z&gt;x)\geq c x^{-1}e^{-x^2/2}\)</span>{% endraw %}, with an absolute {% raw %}<span class="math inline">\(c&gt;0\)</span>{% endraw %}. Standardizing the increment therefore yields, for large {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb P(E_n)\geq c_q\frac{(n+1)^{-a}}{\sqrt{\log(n+1)}}.\]</div>{% endraw %}

<p>This series diverges because {% raw %}<span class="math inline">\(a&lt;1\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(E_n\)</span>{% endraw %} occurs infinitely often. The already proved upper bound gives eventually</p>

{% raw %}<div class="math display">\[|B_{q^n}|\leq2\sqrt{2q^n\log\log q^n}
\leq\frac{\varepsilon}{2}\sqrt{2q^{n+1}\log\log q^{n+1}}.\]</div>{% endraw %}

<p>On infinitely many of the events {% raw %}<span class="math inline">\(E_n\)</span>{% endraw %}, subtraction now gives</p>

{% raw %}<div class="math display">\[B_{q^{n+1}}\geq\left(1-\frac{3\varepsilon}{2}\right)
\sqrt{2q^{n+1}\log\log q^{n+1}}.\]</div>{% endraw %}

<p>Taking a countable sequence {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} proves the positive limsup. Apply the same proof to {% raw %}<span class="math inline">\(-B\)</span>{% endraw %} to obtain the negative liminf. The upper bound also controls the absolute value. Thus</p>

{% raw %}<div class="math display">\[\limsup_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=1,
\qquad\liminf_{t\to\infty}\frac{B_t}{\sqrt{2t\log\log t}}=-1\quad\text{almost surely}.\]</div>{% endraw %}

<h3 data-note-section="4" id="ancillary-facts">4. Ancillary Facts</h3>
<p>On a filtered probability space {% raw %}<span class="math inline">\((\Omega, \mathcal F, \{\mathcal F_t\}_{t \geq 0} \mathbb P)\)</span>{% endraw %}, a <em>stopping time</em> is a random variable {% raw %}<span class="math inline">\(T: \Omega \to [0,\infty]\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(\{T \leq t\} \in \mathcal F_t\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t \geq 0\)</span>{% endraw %}. The stopped {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %}-field is defined as </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathcal F_T = \{A \in \mathcal F_\infty : A \cap \{T \leq t\} \in \mathcal F_t \,\,\,,\,\, \forall t \geq 0 \} ~.
\end{aligned}\]</div>{% endraw %}
<p>For a continuous function {% raw %}<span class="math inline">\(a:[0,T]\to\mathbb R\)</span>{% endraw %} with {% raw %}<span class="math inline">\(a(0)=0\)</span>{% endraw %}, finite variation means that the sums {% raw %}<span class="math inline">\(\sum_i|a(t_i)-a(t_{i-1})|\)</span>{% endraw %} are bounded over all finite partitions of {% raw %}<span class="math inline">\([0,T]\)</span>{% endraw %}. Equivalently, there is a finite signed Borel measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\mu(\{0\})=0\)</span>{% endraw %}, such that {% raw %}<span class="math inline">\(a(t)=\mu([0,t])\)</span>{% endraw %}. The associated Stieltjes integral is {% raw %}<span class="math inline">\(\int_0^T f(s)\,da(s)=\int_{[0,T]}f\,d\mu\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(\int|f|\,d|\mu|&lt;\infty\)</span>{% endraw %}. Its total variation is</p>

{% raw %}<div class="math display">\[V_T(a)=\int_0^T|da(s)|=|\mu|([0,T])
=\sup_{\pi}\sum_i|a(t_i)-a(t_{i-1})|.\]</div>{% endraw %}

<p>The sums converge to this total variation along every sequence of partitions whose mesh tends to zero; nested partitions are not required:</p>

<span id="eq:integration-lemma-preliminary"></span>
{% raw %}<div class="math display">\[\lim_{n\to\infty}\sum_i|a(t_i^n)-a(t_{i-1}^n)|=V_T(a).\tag{1}\]</div>{% endraw %}

<p>Every sum is at most {% raw %}<span class="math inline">\(V_T(a)\)</span>{% endraw %}. For the reverse inequality, choose a fixed partition {% raw %}<span class="math inline">\(0=s_0&lt;\cdots&lt;s_m=T\)</span>{% endraw %} with variation sum larger than {% raw %}<span class="math inline">\(V_T(a)-\varepsilon\)</span>{% endraw %}. When the mesh of the {% raw %}<span class="math inline">\(n\)</span>{% endraw %}-th partition is sufficiently small, choose distinct ordered points {% raw %}<span class="math inline">\(u_j^n\)</span>{% endraw %} from it with {% raw %}<span class="math inline">\(u_j^n\to s_j\)</span>{% endraw %}, including the endpoints. The triangle inequality, applied to each group of consecutive intervals between these points, gives</p>

{% raw %}<div class="math display">\[\sum_i|a(t_i^n)-a(t_{i-1}^n)|\geq\sum_{j=1}^m|a(u_j^n)-a(u_{j-1}^n)|
\longrightarrow\sum_{j=1}^m|a(s_j)-a(s_{j-1})|&gt;V_T(a)-\varepsilon.\]</div>{% endraw %}

<p>Continuity gives the displayed limit. Since {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} is arbitrary, the lower bound and the definition of {% raw %}<span class="math inline">\(V_T(a)\)</span>{% endraw %} prove (1).</p>


<p>For processes, finite variation means finite variation on every compact time interval. Work with a filtration satisfying the usual conditions. A continuous adapted process {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(M_0\in L^1\)</span>{% endraw %}, is a continuous local martingale if there are stopping times {% raw %}<span class="math inline">\(T_n\uparrow\infty\)</span>{% endraw %} almost surely such that every stopped process {% raw %}<span class="math inline">\(M^{T_n}\)</span>{% endraw %} is a uniformly integrable martingale. This convention allows a nonzero initial value. One can always include a deterministic cutoff in a localising sequence.<a href="#fn1" class="footnote-ref" id="fnref1" role="doc-noteref"><sup>1</sup></a></p>

<div id="result-1" class="remark" data-note-number="1" data-note-kind="Remark">
<p><strong>Remark 1.</strong> Every continuous martingale is a local martingale: {% raw %}<span class="math inline">\(M^n_t=\mathbb{E}[M_n\mid\mathcal F_{t\wedge n}]\)</span>{% endraw %} is uniformly integrable. Stopping a local martingale preserves the property, as does replacing a reducing sequence {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} by {% raw %}<span class="math inline">\(T_n\wedge S_n\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(S_n\uparrow\infty\)</span>{% endraw %} are stopping times. For two local martingales, the minimum of their reducing sequences reduces any linear combination. These facts follow from optional sampling for uniformly integrable martingales.</p>

<span id="prop:cts-local-M-supermartingale"></span>
<p>A nonnegative continuous local martingale is a supermartingale. Indeed, Fatou’s lemma first gives {% raw %}<span class="math inline">\(\mathbb{E}M_t\leq\mathbb{E}M_0&lt;\infty\)</span>{% endraw %}, and conditional Fatou gives, for {% raw %}<span class="math inline">\(s\leq t\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\mathbb{E}[M_t\mid\mathcal F_s]
\leq\liminf_n\mathbb{E}[M_{t\wedge T_n}\mid\mathcal F_s]
=\liminf_nM_{s\wedge T_n}=M_s.\]</div>{% endraw %}

<span id="prop:cts-local-M-ui"></span>
<p>If instead {% raw %}<span class="math inline">\(|M_t|\leq Z\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, outside one null set, with {% raw %}<span class="math inline">\(Z\in L^1\)</span>{% endraw %}, conditional dominated convergence preserves equality in this argument. The family {% raw %}<span class="math inline">\(\{M_t:t\geq0\}\)</span>{% endraw %} is dominated by {% raw %}<span class="math inline">\(Z\)</span>{% endraw %}, hence uniformly integrable. Thus {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is a uniformly integrable martingale.</p>

<span id="prop:inf-time-reduces-M"></span>
<p>For {% raw %}<span class="math inline">\(\tau_n=\inf\{t\geq0:|M_t|\geq n\}\)</span>{% endraw %}, continuity and adaptation give the stopping-time property, and boundedness of each path on compact intervals gives {% raw %}<span class="math inline">\(\tau_n\uparrow\infty\)</span>{% endraw %}. Also, {% raw %}<span class="math inline">\(|M_{t\wedge\tau_n}|\leq n+|M_0|\)</span>{% endraw %}. The preceding domination argument makes {% raw %}<span class="math inline">\(M^{\tau_n}\)</span>{% endraw %} a uniformly integrable martingale. Thus continuous local martingales admit localization by level-hitting times.</p>


</div>
<div id="result-2" class="example" data-note-number="2" data-note-kind="Example">
<p><strong>Example 2 (Brownian motion with negative drift).</strong> For {% raw %}<span class="math inline">\(\mu&gt;0\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(S=\sup_{t\geq0}(B_t-\mu t)\)</span>{% endraw %}. We prove that {% raw %}<span class="math inline">\(S\)</span>{% endraw %} has an exponential distribution with rate {% raw %}<span class="math inline">\(2\mu\)</span>{% endraw %}.</p>


{% raw %}<div class="math display">\[\begin{aligned}
        \sup_{t \geq 0} B_t - \mu t ~.
    
\end{aligned}\]</div>{% endraw %}
<p>Since the process starts at zero,</p>


{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb P\left( \sup_{t \geq 0} B_t - \mu t \geq y \right) = 1 \quad \text{if } y \leq 0 ~.
    
\end{aligned}\]</div>{% endraw %}
<p> For {% raw %}<span class="math inline">\(y &gt; 0\)</span>{% endraw %}, observe that </p>

{% raw %}<div class="math display">\[\begin{gathered}
        \mathbb P\left( \sup_{t \geq 0} B_t - \mu t \geq y \right) = \mathbb P\left( \sup_{t \geq 0} B_{(\frac{1}{2\mu})^2 t} - \mu \left(\frac{1}{2\mu} \right)^2 t \geq y \right) \\
        = \mathbb P\left( \sup_{t \geq 0} 2\mu B_{(\frac{1}{2\mu})^2 t} - \frac{t}{2} \geq 2 \mu y \right) = \mathbb P\left( \sup_{t \geq 0} B_t - \frac{t}{2} \geq 2 \mu y \right) = \mathbb P\left( \sup_{t \geq 0} e^{B_t - \frac{t}{2}} \geq e^{2 \mu y} \right) ~.
    
\end{gathered}\]</div>{% endraw %}
<p>Set {% raw %}<span class="math inline">\(M_t=\exp(B_t-t/2)\)</span>{% endraw %}. Independent Gaussian increments make {% raw %}<span class="math inline">\(M\)</span>{% endraw %} a nonnegative continuous martingale. The LIL gives {% raw %}<span class="math inline">\(B_t/t\to0\)</span>{% endraw %}, and hence</p>


{% raw %}<div class="math display">\[\begin{aligned}
        \lim\limits_{t \to \infty} B_t - \frac{t}{2} = \lim\limits_{t \to \infty} t \left( \frac{B_t}{t} - \frac12 \right) = -\infty \quad \rm a.s. ~.
    
\end{aligned}\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a=e^{2\mu y}&gt;1\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(\tau_a=\inf\{t:M_t=a\}\)</span>{% endraw %}. The stopped martingale {% raw %}<span class="math inline">\(M^{\tau_a}\)</span>{% endraw %} is bounded by {% raw %}<span class="math inline">\(a\)</span>{% endraw %}, so optional sampling and dominated convergence give {% raw %}<span class="math inline">\(1=\mathbb{E} M_{t\wedge\tau_a}\to a\mathbb P(\tau_a&lt;\infty)\)</span>{% endraw %}. On {% raw %}<span class="math inline">\(\{\tau_a=\infty\}\)</span>{% endraw %}, the limit is zero, while on {% raw %}<span class="math inline">\(\{\tau_a&lt;\infty\}\)</span>{% endraw %} it is {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(M_t\to0\)</span>{% endraw %}, a level {% raw %}<span class="math inline">\(a&gt;1\)</span>{% endraw %} is attained whenever the supremum is at least {% raw %}<span class="math inline">\(a\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb P\left( \sup_{t \geq 0} B_t - \mu t \geq y \right) = \mathbb P\left( \sup_{t \geq 0} M_t \geq e^{2\mu y} \right) = e^{-2\mu y} ~.
    
\end{aligned}\]</div>{% endraw %}
<p>The distribution function is therefore</p>


{% raw %}<div class="math display">\[\begin{aligned}
        \mathbb P\left( \sup_{t \geq 0} B_t - \mu t \leq y \right) = \begin{cases}
            1 - e^{-2\mu y} &amp; \text{ for } y \geq 0 ~, \\
            0 &amp; \text{ otherwise} \, .
        \end{cases}
    
\end{aligned}\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(S\)</span>{% endraw %} is exponentially distributed with rate {% raw %}<span class="math inline">\(2\mu\)</span>{% endraw %}.</p>


</div>
<section id="footnotes" class="footnotes footnotes-end-of-document" role="doc-endnotes">
<hr />
<ol>
<li id="fn1"><p>Almost sure divergence of the localising sequence means {% raw %}<span class="math inline">\(T_n(\omega)\to\infty\)</span>{% endraw %} outside a single null set.<a href="#fnref1" class="footnote-back" role="doc-backlink">↩︎</a></p></li>
</ol>
</section>

<p class="note-reading">Reading: Le Gall (2016), Brownian Motion, Martingales, and Stochastic Calculus.</p>


<nav class="note-related" aria-label="Related notes"><p>Related notes: <a href="{% post_url 2023-01-21-brownian-motion-markov-properties-and-path-continuity %}">Brownian Motion: Markov Properties and Path Continuity</a>.</p></nav>

<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-01-21-brownian-motion-markov-properties-and-path-continuity %}">Brownian Motion: Markov Properties and Path Continuity</a> · Next: <a href="{% post_url 2023-08-23-quadratic-variation-and-the-doobmeyer-decomposition %}">Quadratic Variation and the Doob–Meyer Decomposition</a></p></nav>

</div>
