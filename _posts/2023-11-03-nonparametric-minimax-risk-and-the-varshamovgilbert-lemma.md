---
layout: "post"
title: "Nonparametric Minimax Risk and the Varshamov–Gilbert Lemma"
date: "2023-11-03"
tags: ["statistics", "nonparametric estimation"]
excerpt: "Nonparametric Minimax Risk and the Varshamov–Gilbert Lemma. Notes on nonparametric estimation."
note_series: "Nonparametric estimation"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Fundamentals of Nonparametric Estimation/nonparametric.tex"
redirect_from: ["/2023/01/14/nonparametric-estimation/", "/2023/01/14/nonparametric-minimax-risk-and-the-varshamovgilbert-lemma/", "/2023/02/20/the-varshamovgilbert-packing-lemma/"]
---

<div class="note-content" markdown="0">

<p>A minimax lower bound asks how well any estimator can perform over a class of possible functions. One approach selects many functions that are separated in the estimation loss but difficult to distinguish from the data. The Varshamov–Gilbert lemma supplies the combinatorial part of this construction: a large collection of binary vectors separated in Hamming distance.</p>

<p>We first set out the estimation models in which these lower-bound constructions are used. Briefly, for a standard statistical problem involving i.i.d. real-valued random variables {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %}, whose common distribution is absolutely continuous with respect to the Lebesgue measure on {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}, say we want to estimate its density function {% raw %}<span class="math inline">\(p : \mathbb R \to [0,\infty)\)</span>{% endraw %}. If we think {% raw %}<span class="math inline">\(p\)</span>{% endraw %} belongs to some family of functions {% raw %}<span class="math inline">\(\{g(x,\theta): \theta \in \Theta \subset \mathbb R^k\}\)</span>{% endraw %}, then we say the estimation problem is <em>parametric</em>. If the model permits an infinite-dimensional class of densities, the problem is <em>nonparametric</em>; the class may still be specified by smoothness or shape restrictions.</p>

<h2 data-note-section="1" id="preliminaries">1. Preliminaries</h2>
<p>For regression, consider the observation model: suppose {% raw %}<span class="math inline">\(\{(X_i,Y_i)\}_{1 \leq i \leq n}\)</span>{% endraw %} is a collection of independent observations (random variables) such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    Y_i = f(X_i) + \xi_i ~~,~~ X_i \in [0,1] ~.
\end{aligned}\]</div>{% endraw %}
<p> Here, {% raw %}<span class="math inline">\(f: [0,1] \to \mathbb R\)</span>{% endraw %} is prespecified (called the <em>regression function</em>), and {% raw %}<span class="math inline">\(\mathbb{E}[\xi_i\mid X_i]=0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i\)</span>{% endraw %}. As is typically the case, we suppose {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is a class of functions with no prespecified form. To approximate the model illustrated above, we consider a Gaussian white noise model of the form </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dif Y(t) = f(t) \dif t + \varepsilon \dif W(t) \quad t \in [0,1] ~,~ \varepsilon \in (0,1)
\end{aligned}\]</div>{% endraw %}
<p> for some function {% raw %}<span class="math inline">\(f \in \mathcal F\)</span>{% endraw %}. We observe a sample path {% raw %}<span class="math inline">\(\mathbf X = \{ Y(t) : 0 \leq t \leq 1 \}\)</span>{% endraw %}. We also observe a full infinite sequence of Gaussian observations </p>

{% raw %}<div class="math display">\[\begin{aligned}
    y_j = \int_0^1 \varphi_j (t) \dif Y(t) = \theta_j + \varepsilon \xi_j ~~,~ j \in \mathbb N ~.
\end{aligned}\]</div>{% endraw %}
<p> Here, {% raw %}<span class="math inline">\((\varphi_j)\)</span>{% endraw %} is a complete orthonormal basis of {% raw %}<span class="math inline">\(L^2[0,1]\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\xi_j = \int_0^1 \varphi_j (x) \dif W(x)\)</span>{% endraw %} are i.i.d. standard normal random variables.</p>

<p>Assume {% raw %}<span class="math inline">\(f\in L^2[0,1]\)</span>{% endraw %}, and define {% raw %}<span class="math inline">\(\theta_j=\int_0^1 f(t)\varphi_j(t)\,dt\)</span>{% endraw %}. Integrating the white-noise equation against each deterministic basis function gives the sequence representation above. For any finite list of indices, the Wiener integrals are jointly Gaussian, centered, and satisfy</p>

{% raw %}<div class="math display">\[E(\xi_j\xi_k)=\int_0^1\varphi_j(t)\varphi_k(t)\,dt=\mathbf1\{j=k\}.\]</div>{% endraw %}

<p>Their joint Gaussian law therefore makes them independent, not merely uncorrelated. Parseval's identity translates squared function-estimation error into sequence error: {% raw %}<span class="math inline">\(\|\hat f-f\|_2^2=\sum_j(\hat\theta_j-\theta_j)^2\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(\hat f,f\in L^2\)</span>{% endraw %}. This is the connection used by sequence-space lower-bound constructions; equivalence of a general regression experiment with white noise requires additional conditions and is not asserted here.</p>
<h3 data-note-section="1.1" id="ancillary-technical-results">1.1. Ancillary Technical Results</h3>
<p>Let {% raw %}<span class="math inline">\(H(x,y) = \sum_{1 \leq i \leq n} \mathbb 1\{x_i \neq y_i\}\)</span>{% endraw %} for {% raw %}<span class="math inline">\(x,y \in \{0,1\}^n\)</span>{% endraw %} denote the Hamming distance. An important result that is frequently used in combinatorial arguments is the <em>Varshamov-Gilbert lemma</em>: it addresses the question of how <em>massive</em> can be the set of all binary sequences with pairwise Hamming separation proportional to the dimension.</p>

<div id="lem:varshamov-gilbert" class="lemma" data-note-number="1" data-note-kind="Lemma">
<p><strong>Lemma 1</strong> (Varshamov-Gilbert).  Let {% raw %}<span class="math inline">\(m \geq 8\)</span>{% endraw %}. Then, there exists a subset {% raw %}<span class="math inline">\(\{x_0,\dots,x_M\} \subset \Xi \triangleq \{0,1\}^m\)</span>{% endraw %} such that with {% raw %}<span class="math inline">\(x_0 = (0,0,\dots,0) \in \{0,1\}^m\)</span>{% endraw %}, </p>

{% raw %}<div class="math display">\[\begin{aligned}
         H(x_j, x_k) \geq \frac{m}{8} ~~, \quad \text{for all }\: 0 \leq j &lt; k \leq M ~,
     
\end{aligned}\]</div>{% endraw %}
<p> and {% raw %}<span class="math inline">\(M \geq 2^{m/8}\)</span>{% endraw %}.</p>

</div>
<div class="proof">
<p><em>Proof.</em> The construction is greedy: choose a vector, exclude its nearby neighbors, and repeat. Start with {% raw %}<span class="math inline">\(x_0=0\)</span>{% endraw %} and successively choose a binary vector outside all previously removed Hamming balls of radius {% raw %}<span class="math inline">\(D=\lfloor m/8\rfloor\)</span>{% endraw %}. Stop when the excluded balls cover the cube. Since each choice excludes only a bounded number of vectors, covering the whole cube requires many choices. The selected vectors have pairwise distance at least {% raw %}<span class="math inline">\(D+1&gt;m/8\)</span>{% endraw %}. Each ball contains </p>

{% raw %}<div class="math display">\[V_m(D)=\sum_{i=0}^{D}\binom mi\]</div>{% endraw %}
<p> points, including its center. Consequently, </p>

{% raw %}<span id="eq:ineq-vg"></span><div class="math display">\[(M+1)V_m(D)\geq2^m.\tag{1}\]</div>{% endraw %}
<p> If {% raw %}<span class="math inline">\(B\sim\operatorname{Bin}(m,1/2)\)</span>{% endraw %}, Hoeffding’s inequality gives </p>

{% raw %}<div class="math display">\[2^{-m}V_m(D)=\mathbf P(B\leq D)\leq e^{-9m/32}&lt;2^{-m/4}.\]</div>{% endraw %}
<p>One can verify the binomial estimate directly. Write {% raw %}<span class="math inline">\(B=\sum_{i=1}^m B_i\)</span>{% endraw %}, with independent fair Bernoulli variables. For {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[E e^{-t(B-m/2)}=\{\cosh(t/2)\}^m\le e^{mt^2/8}.\]</div>{% endraw %}

<p>The inequality follows by integrating {% raw %}<span class="math inline">\(\tanh u\le u\)</span>{% endraw %} to get {% raw %}<span class="math inline">\(\log\cosh u\le u^2/2\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(D\le m/8\)</span>{% endraw %}, Markov's inequality gives</p>

{% raw %}<div class="math display">\[P(B\le D)\le\exp(-3tm/8+mt^2/8).\]</div>{% endraw %}

<p>Taking {% raw %}<span class="math inline">\(t=3/2\)</span>{% endraw %} yields {% raw %}<span class="math inline">\(e^{-9m/32}\)</span>{% endraw %}. The exponent is smaller than {% raw %}<span class="math inline">\(-m\log2/4\)</span>{% endraw %}. Finally, put {% raw %}<span class="math inline">\(a=2^{m/8}\ge2\)</span>{% endraw %}: then {% raw %}<span class="math inline">\(2^{m/4}=a^2\ge a+1\)</span>{% endraw %}, so the estimate on the number of centers gives the stated estimate on {% raw %}<span class="math inline">\(M\)</span>{% endraw %}, which excludes the initial center.</p>
<p> Hence {% raw %}<span class="math inline">\(M+1&gt;2^{m/4}\geq2^{m/8}+1\)</span>{% endraw %} for {% raw %}<span class="math inline">\(m\geq8\)</span>{% endraw %}, proving the claim. ◻</p>

</div>

<nav class="note-series" aria-label="Notes in this series"><p>Additional reading: <a href="{% post_url 2023-03-16-kernel-density-estimation-pointwise-and-integrated-risk %}">Kernel Density Estimation: Pointwise and Integrated Risk</a></p></nav>

</div>
