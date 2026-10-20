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

<p>A minimax lower bound asks how well any estimator can perform over a class of possible functions. One approach selects many functions that are separated in the estimation loss but difficult to distinguish from the data. The Varshamov–Gilbert lemma supplies a large collection of binary vectors separated in Hamming distance. We use these vectors to construct functions, apply Fano's inequality to bound estimation risk, and obtain matching upper and lower bounds for Gaussian sequence estimation and density estimation.</p>

<p>We first set out the estimation models in which these lower-bound constructions are used. Briefly, for a standard statistical problem involving i.i.d. real-valued random variables {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %}, whose common distribution is absolutely continuous with respect to the Lebesgue measure on {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}, say we want to estimate its density function {% raw %}<span class="math inline">\(p : \mathbb R \to [0,\infty)\)</span>{% endraw %}. If we think {% raw %}<span class="math inline">\(p\)</span>{% endraw %} belongs to some family of functions {% raw %}<span class="math inline">\(\{g(x,\theta): \theta \in \Theta \subset \mathbb R^k\}\)</span>{% endraw %}, then we say the estimation problem is <em>parametric</em>. If the model permits an infinite-dimensional class of densities, the problem is <em>nonparametric</em>; the class may still be specified by smoothness or shape restrictions.</p>

<h2 data-note-section="1" id="preliminaries">1. Preliminaries</h2>
<p>For regression, consider the observation model: suppose {% raw %}<span class="math inline">\(\{(X_i,Y_i)\}_{1 \leq i \leq n}\)</span>{% endraw %} is a collection of independent observations (random variables) such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    Y_i = f(X_i) + \xi_i ~~,~~ X_i \in [0,1] ~.
\end{aligned}\]</div>{% endraw %}
<p>Here, {% raw %}<span class="math inline">\(f: [0,1] \to \mathbb R\)</span>{% endraw %} is the unknown, fixed <em>regression function</em>, and {% raw %}<span class="math inline">\(\mathbb{E}[\xi_i\mid X_i]=0\)</span>{% endraw %} for all {% raw %}<span class="math inline">\(i\)</span>{% endraw %}. We suppose {% raw %}<span class="math inline">\(f\in\mathcal F\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\mathcal F\)</span>{% endraw %} is a specified function class. A related experiment is the Gaussian white-noise model</p>

{% raw %}<div class="math display">\[\begin{aligned}
    \dif Y(t) = f(t) \dif t + \varepsilon \dif W(t) \quad t \in [0,1] ~,~ \varepsilon \in (0,1)
\end{aligned}\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(W\)</span>{% endraw %} is standard Brownian motion and {% raw %}<span class="math inline">\(Y(0)=0\)</span>{% endraw %}. We observe a sample path {% raw %}<span class="math inline">\(\mathbf X = \{ Y(t) : 0 \leq t \leq 1 \}\)</span>{% endraw %}. Integrating this path against basis functions gives the Gaussian sequence observations</p>

{% raw %}<div class="math display">\[\begin{aligned}
    y_j = \int_0^1 \varphi_j (t) \dif Y(t) = \theta_j + \varepsilon \xi_j ~~,~ j \in \mathbb N ~.
\end{aligned}\]</div>{% endraw %}
<p> Here, {% raw %}<span class="math inline">\((\varphi_j)\)</span>{% endraw %} is a complete orthonormal basis of {% raw %}<span class="math inline">\(L^2[0,1]\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\xi_j = \int_0^1 \varphi_j (x) \dif W(x)\)</span>{% endraw %} are i.i.d. standard normal random variables.</p>

<p>Assume {% raw %}<span class="math inline">\(f\in L^2[0,1]\)</span>{% endraw %}, and define {% raw %}<span class="math inline">\(\theta_j=\int_0^1 f(t)\varphi_j(t)\,dt\)</span>{% endraw %}. Integrating the white-noise equation against each deterministic basis function gives the sequence representation above. For any finite list of indices, the Wiener integrals are jointly Gaussian, centered, and satisfy</p>

{% raw %}<div class="math display">\[E(\xi_j\xi_k)=\int_0^1\varphi_j(t)\varphi_k(t)\,dt=\mathbf1\{j=k\}.\]</div>{% endraw %}

<p>Their joint Gaussian law therefore makes them independent, not merely uncorrelated. Parseval's identity translates squared function-estimation error into sequence error: {% raw %}<span class="math inline">\(\|\hat f-f\|_2^2=\sum_j(\hat\theta_j-\theta_j)^2\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(\hat f,f\in L^2\)</span>{% endraw %}. This is the connection used by sequence-space lower-bound constructions; equivalence of a general regression experiment with white noise requires additional conditions and is not asserted here.</p>
<h3 data-note-section="1.1" id="ancillary-technical-results">1.1. The Varshamov–Gilbert Lemma</h3>
<p>For {% raw %}<span class="math inline">\(x,y\in\{0,1\}^m\)</span>{% endraw %}, the Hamming distance {% raw %}<span class="math inline">\(H(x,y)=\sum_{i=1}^m\mathbb 1\{x_i\ne y_i\}\)</span>{% endraw %} counts the coordinates at which the vectors differ. The Varshamov–Gilbert lemma gives exponentially many binary vectors whose pairwise distances are proportional to {% raw %}<span class="math inline">\(m\)</span>{% endraw %}.</p>

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

<h2 data-note-section="2" id="minimax-risk-and-testing">2. Minimax risk and reduction to testing</h2>
<p>Let {% raw %}<span class="math inline">\(Z\)</span>{% endraw %} denote the observed data, with law {% raw %}<span class="math inline">\(P_\theta^{(n)}\)</span>{% endraw %} when the unknown parameter is {% raw %}<span class="math inline">\(\theta\in\Theta\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(d\)</span>{% endraw %} be a metric on a space containing both the parameter class and the possible estimates. Under squared loss, the maximum risk of an estimator and the minimax risk are</p>
{% raw %}<div class="math display">\[
r_n(\widehat\theta_n,\Theta)\triangleq\sup_{\theta\in\Theta}\mathbb E_\theta d^2(\widehat\theta_n,\theta),\qquad
\mathcal R_n^*(\Theta)\triangleq\inf_{\widehat\theta_n}r_n(\widehat\theta_n,\Theta).
\]</div>{% endraw %}
<p>The infimum is over all measurable estimators based on the observations. In function estimation we use {% raw %}<span class="math inline">\(d(f,g)=\|f-g\|_2\)</span>{% endraw %}; the domain of integration will be specified in each model. A positive sequence {% raw %}<span class="math inline">\(\psi_n\to0\)</span>{% endraw %} is a minimax rate if, for constants {% raw %}<span class="math inline">\(0&lt;c\le C&lt;\infty\)</span>{% endraw %} and all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
c\psi_n^2\le\mathcal R_n^*(\Theta)\le C\psi_n^2.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\psi_n\)</span>{% endraw %} is the rate in root mean squared error, while {% raw %}<span class="math inline">\(\psi_n^2\)</span>{% endraw %} is the rate of the squared-error risk. An upper bound follows by constructing one estimator. A lower bound must hold for every estimator, including nonlinear and data-dependent procedures.</p>
<p>To prove such a bound, choose a finite subset {% raw %}<span class="math inline">\(\theta_0,\ldots,\theta_M\)</span>{% endraw %} of the parameter class. If an estimator is close enough to the true parameter, its nearest member of this subset identifies the true index. A lower bound on the probability of misclassification therefore gives a lower bound on estimation risk.</p>
<h3 data-note-section="2.1" id="fano-inequality">2.1. Fano’s inequality</h3>
<p>Write</p>
{% raw %}<div class="math display">\[
D(P\|Q)\triangleq\int\log\left(\frac{dP}{dQ}\right)dP
\]</div>{% endraw %}
<p>for Kullback–Leibler divergence when {% raw %}<span class="math inline">\(P\ll Q\)</span>{% endraw %}, and set it equal to infinity otherwise. All logarithms below are natural. We use the following form of Fano’s inequality; the <a href="https://web.stanford.edu/class/stats311/lecture-notes.pdf#page=188">information-theoretic treatment by Duchi, Section 8.4.1</a>, gives the corresponding testing and estimation bounds.</p>
<div id="lem:fano" class="lemma" data-note-kind="Lemma" data-note-number="2">
<p><strong>Lemma 2</strong> (A finite-set lower bound). Suppose {% raw %}<span class="math inline">\(M\ge1\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\theta_0,\ldots,\theta_M\in\Theta\)</span>{% endraw %}, and</p>
{% raw %}<div class="math display">\[
d(\theta_j,\theta_k)\ge2\delta\quad(j\ne k),\qquad
\frac1{M+1}\sum_{j=0}^M D(P_j\|P_0)\le\alpha\log(M+1),
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(0&lt;\alpha&lt;1\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(P_j\)</span>{% endraw %} is the law of the full observation under {% raw %}<span class="math inline">\(\theta_j\)</span>{% endraw %}. Then</p>
{% raw %}<div class="math display">\[
\inf_{\widehat\theta}\sup_{\theta\in\Theta}\mathbb E_\theta d^2(\widehat\theta,\theta)
\ge\delta^2\left(1-\alpha-\frac{\log2}{\log(M+1)}\right).
\]</div>{% endraw %}
</div>
<div class="proof">
<p><em>Proof.</em> Let {% raw %}<span class="math inline">\(J\)</span>{% endraw %} be uniform on {% raw %}<span class="math inline">\(\{0,\ldots,M\}\)</span>{% endraw %}, and, conditional on {% raw %}<span class="math inline">\(J=j\)</span>{% endraw %}, draw {% raw %}<span class="math inline">\(Z\sim P_j\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(\overline P=(M+1)^{-1}\sum_jP_j\)</span>{% endraw %}. The mutual information is</p>
{% raw %}<div class="math display">\[
I(J;Z)=\frac1{M+1}\sum_{j=0}^M D(P_j\|\overline P).
\]</div>{% endraw %}
<p>Splitting {% raw %}<span class="math inline">\(\log(dP_j/dP_0)\)</span>{% endraw %} through {% raw %}<span class="math inline">\(\overline P\)</span>{% endraw %} and averaging gives</p>
{% raw %}<div class="math display">\[
\frac1{M+1}\sum_{j=0}^M D(P_j\|P_0)
=I(J;Z)+D(\overline P\|P_0)\ge I(J;Z).
\]</div>{% endraw %}
<p>For any classifier {% raw %}<span class="math inline">\(\widehat J(Z)\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(p_e=\mathbb P(\widehat J\ne J)\)</span>{% endraw %}. Write {% raw %}<span class="math inline">\(\mathsf H\)</span>{% endraw %} for Shannon entropy, to distinguish it from Hamming distance. Conditional on the data and whether an error occurred, there is one possible correct label and at most {% raw %}<span class="math inline">\(M\)</span>{% endraw %} incorrect labels. The entropy chain rule gives</p>
{% raw %}<div class="math display">\[
\mathsf H(J\mid Z)\le\log2+p_e\log M
\le\log2+p_e\log(M+1).
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\mathsf H(J)=\log(M+1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(I(J;Z)=\mathsf H(J)-\mathsf H(J\mid Z)\)</span>{% endraw %}, it follows that</p>
{% raw %}<div class="math display">\[
p_e\ge1-\frac{I(J;Z)+\log2}{\log(M+1)}
\ge1-\alpha-\frac{\log2}{\log(M+1)}.
\]</div>{% endraw %}
<p>Given {% raw %}<span class="math inline">\(\widehat\theta\)</span>{% endraw %}, choose {% raw %}<span class="math inline">\(\widehat J\)</span>{% endraw %} to minimize {% raw %}<span class="math inline">\(d(\widehat\theta,\theta_j)\)</span>{% endraw %}, breaking ties by the smallest index. If {% raw %}<span class="math inline">\(d(\widehat\theta,\theta_J)&lt;\delta\)</span>{% endraw %}, the triangle inequality and the separation assumption force {% raw %}<span class="math inline">\(\widehat J=J\)</span>{% endraw %}. Hence</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\sup_{\theta\in\Theta}\mathbb E_\theta d^2(\widehat\theta,\theta)
&amp;\ge\frac1{M+1}\sum_{j=0}^M\mathbb E_j d^2(\widehat\theta,\theta_j)\\
&amp;\ge\delta^2\frac1{M+1}\sum_{j=0}^M P_j(\widehat J\ne j)
=\delta^2p_e.
\end{aligned}
\]</div>{% endraw %}
<p>Taking the infimum proves the result. ◻</p>
</div>
<p>For the packing in Lemma 1, {% raw %}<span class="math inline">\(\log(M+1)\ge m\log2/8\)</span>{% endraw %}. Thus the bound is at least {% raw %}<span class="math inline">\(\delta^2/2\)</span>{% endraw %} whenever {% raw %}<span class="math inline">\(m\ge32\)</span>{% endraw %} and the average divergence is at most {% raw %}<span class="math inline">\(\log(M+1)/8\)</span>{% endraw %}. The divergence may grow with {% raw %}<span class="math inline">\(m\)</span>{% endraw %}: what matters is its size relative to the logarithm of the number of alternatives.</p>
<h2 data-note-section="3" id="sobolev-minimax-risk">3. Minimax risk over a Sobolev ellipsoid</h2>
<p>Return to the Gaussian sequence observations {% raw %}<span class="math inline">\(y_j=\theta_j+\varepsilon\xi_j\)</span>{% endraw %}. Use the same trigonometric basis and coefficient weights as in <a href="{% post_url 2023-10-17-projection-estimators-and-linear-minimax-risk %}">Projection Estimators and Linear Minimax Risk</a>:</p>
{% raw %}<div class="math display">\[
\begin{gathered}
\varphi_1(t)=1,\qquad\varphi_{2k}(t)=\sqrt2\cos(2\pi kt),\qquad
\varphi_{2k+1}(t)=\sqrt2\sin(2\pi kt),\\
a_1=0,\qquad a_{2k}=a_{2k+1}=(2k)^\beta,\qquad
\Theta(\beta,Q)=\left\{\theta\in\ell^2:\sum_{j\ge1}a_j^2\theta_j^2\le Q\right\}.
\end{gathered}
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\beta&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q&gt;0\)</span>{% endraw %}. For integer {% raw %}<span class="math inline">\(\beta\ge1\)</span>{% endraw %}, periodic functions with {% raw %}<span class="math inline">\(\|f^{(\beta)}\|_2\le L\)</span>{% endraw %} correspond to {% raw %}<span class="math inline">\(Q=L^2/\pi^{2\beta}\)</span>{% endraw %}. For other positive {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %}, the ellipsoid itself defines the smoothness class. The constant coefficient {% raw %}<span class="math inline">\(\theta_1\)</span>{% endraw %} is unrestricted.</p>
<div id="thm:sobolev-minimax-rate" class="theorem" data-note-kind="Theorem" data-note-number="3">
<p><strong>Theorem 3</strong> (Sobolev minimax rate). For fixed {% raw %}<span class="math inline">\(\beta,Q&gt;0\)</span>{% endraw %}, there are constants {% raw %}<span class="math inline">\(c_\beta,C_\beta&gt;0\)</span>{% endraw %} such that, for all sufficiently small {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
c_\beta Q^{1/(2\beta+1)}\varepsilon^{4\beta/(2\beta+1)}
\le\inf_{\widehat\theta}\sup_{\theta\in\Theta(\beta,Q)}
\mathbb E_\theta\|\widehat\theta-\theta\|_{\ell^2}^2
\le C_\beta Q^{1/(2\beta+1)}\varepsilon^{4\beta/(2\beta+1)}.
\]</div>{% endraw %}
</div>
<h3 data-note-section="3.1" id="projection-upper-bound">3.1. The projection upper bound</h3>
<p>Keep the first {% raw %}<span class="math inline">\(N+1\)</span>{% endraw %} coordinates, including the constant coefficient: {% raw %}<span class="math inline">\(\widehat\theta_j=y_j\)</span>{% endraw %} for {% raw %}<span class="math inline">\(j\le N+1\)</span>{% endraw %} and zero otherwise. Independence and Parseval give</p>
{% raw %}<div class="math display">\[
\mathbb E_\theta\|\widehat\theta-\theta\|_{\ell^2}^2
=(N+1)\varepsilon^2+\sum_{j&gt;N+1}\theta_j^2
\le(N+1)\varepsilon^2+\frac{Q}{(N+1)^{2\beta}}.
\]</div>{% endraw %}
<p>The last inequality uses {% raw %}<span class="math inline">\(a_j\ge(N+1)^\beta\)</span>{% endraw %} on the omitted coordinates. Taking {% raw %}<span class="math inline">\(N=\lceil(Q/\varepsilon^2)^{1/(2\beta+1)}\rceil\)</span>{% endraw %} proves the upper bound. The unrestricted mean contributes variance {% raw %}<span class="math inline">\(\varepsilon^2\)</span>{% endraw %} and no bias.</p>
<h3 data-note-section="3.2" id="sequence-packing-lower-bound">3.2. The packing lower bound</h3>
<p>Set</p>
{% raw %}<div class="math display">\[
m=\left\lceil\left(\frac Q{\varepsilon^2}\right)^{1/(2\beta+1)}\right\rceil,\qquad
b_m^2=\eta Qm^{-(2\beta+1)},\qquad
0&lt;\eta\le\min\left(2^{-2\beta},\frac{\log2}{32}\right).
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(\omega\in\{0,1\}^m\)</span>{% endraw %}, define {% raw %}<span class="math inline">\(\theta_1^\omega=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\theta_{k+1}^\omega=b_m\omega_k\)</span>{% endraw %} for {% raw %}<span class="math inline">\(1\le k\le m\)</span>{% endraw %}, and set the remaining coordinates to zero. Since {% raw %}<span class="math inline">\(a_{k+1}\le(2m)^\beta\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\sum_j a_j^2(\theta_j^\omega)^2
\le(2m)^{2\beta}m b_m^2
=2^{2\beta}\eta Q\le Q.
\]</div>{% endraw %}
<p>Every candidate therefore belongs to the ellipsoid. Choose the vectors {% raw %}<span class="math inline">\(\omega^{(0)},\ldots,\omega^{(M)}\)</span>{% endraw %} from Lemma 1, including {% raw %}<span class="math inline">\(\omega^{(0)}=0\)</span>{% endraw %}. Their squared separation is</p>
{% raw %}<div class="math display">\[
\|\theta^{\omega^{(j)}}-\theta^{\omega^{(k)}}\|_{\ell^2}^2
=b_m^2H(\omega^{(j)},\omega^{(k)})\ge\frac{m b_m^2}{8}.
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(P_\omega\)</span>{% endraw %} be the law of the entire observed sequence. The alternatives differ only in the {% raw %}<span class="math inline">\(m\)</span>{% endraw %} selected coordinates; all other coordinates are independent noise with the same distribution under every alternative. For one selected coordinate the log likelihood ratio against zero is</p>
{% raw %}<div class="math display">\[
\log\frac{d\mathcal N(b_m\omega_k,\varepsilon^2)}{d\mathcal N(0,\varepsilon^2)}(y_{k+1})
=\frac{b_m\omega_k y_{k+1}}{\varepsilon^2}
-\frac{b_m^2\omega_k^2}{2\varepsilon^2}.
\]</div>{% endraw %}
<p>Taking expectations under {% raw %}<span class="math inline">\(P_\omega\)</span>{% endraw %} and summing yields</p>
{% raw %}<div class="math display">\[
D(P_\omega\|P_0)
=\frac{\|\theta^\omega\|_{\ell^2}^2}{2\varepsilon^2}
\le\frac{m b_m^2}{2\varepsilon^2}
\le\frac{\eta m}{2}
\le\frac18\log(M+1).
\]</div>{% endraw %}
<p>The penultimate inequality follows from {% raw %}<span class="math inline">\(m^{2\beta+1}\ge Q/\varepsilon^2\)</span>{% endraw %}. For sufficiently small {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}, we have {% raw %}<span class="math inline">\(m\ge32\)</span>{% endraw %}, so Lemma 2 with {% raw %}<span class="math inline">\(\delta^2=m b_m^2/32\)</span>{% endraw %} gives</p>
{% raw %}<div class="math display">\[
\mathcal R_\varepsilon^*(\Theta(\beta,Q))
\ge\frac{m b_m^2}{64}
=\frac{\eta Q}{64m^{2\beta}}
\ge\frac{\eta}{64\cdot2^{2\beta}}
Q^{1/(2\beta+1)}\varepsilon^{4\beta/(2\beta+1)}.
\]</div>{% endraw %}
<p>In the last step we used {% raw %}<span class="math inline">\(m\le2(Q/\varepsilon^2)^{1/(2\beta+1)}\)</span>{% endraw %}, valid once {% raw %}<span class="math inline">\(Q/\varepsilon^2\ge1\)</span>{% endraw %}. Together with the projection bound, this proves Theorem 3. ◻</p>
<p>Parseval transfers these bounds to integrated squared error for the corresponding functions. In the white-noise model the same lower bound applies to estimators using the full path. On this finite Fourier submodel, subtracting the observed active coordinates from {% raw %}<span class="math inline">\(Y(t)\)</span>{% endraw %} leaves a Gaussian residual whose distribution is independent of the parameter and of those coordinates. It adds no information about the selected alternative.</p>
<p>The choice {% raw %}<span class="math inline">\(\varepsilon=\sigma/\sqrt n\)</span>{% endraw %} gives the familiar squared-risk order {% raw %}<span class="math inline">\(n^{-2\beta/(2\beta+1)}\)</span>{% endraw %}. Applying this conclusion to discrete regression requires assumptions on the design and function class. The <a href="{% post_url 2023-10-17-projection-estimators-and-linear-minimax-risk %}">projection-estimator post</a> supplies that argument for equally spaced Gaussian regression and periodic Sobolev smoothness {% raw %}<span class="math inline">\(\beta&gt;1/2\)</span>{% endraw %}.</p>
<h2 data-note-section="4" id="density-minimax-risk">4. A density-estimation lower bound</h2>
<p>Now let {% raw %}<span class="math inline">\(X_1,\ldots,X_n\)</span>{% endraw %} be independent observations from a density {% raw %}<span class="math inline">\(p\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}. We use the same integrated smoothness class as in the <a href="{% post_url 2023-03-16-kernel-density-estimation-pointwise-and-integrated-risk %}#mean-integrated-squared-error">kernel-density post</a>. Put {% raw %}<span class="math inline">\(\ell=\lceil\beta\rceil-1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\gamma=\beta-\ell\in(0,1]\)</span>{% endraw %}, and define</p>
{% raw %}<div class="math display">\[
\mathcal P(\beta,L)=\left\{p\ge0:\int_{\mathbb R}p=1,\ p\in W^{\ell,2}(\mathbb R),\
\|p^{(\ell)}(\cdot+t)-p^{(\ell)}\|_2\le L|t|^\gamma\ \text{for every }t\in\mathbb R\right\}.
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(W^{0,2}=L^2\)</span>{% endraw %}; for {% raw %}<span class="math inline">\(\ell\ge1\)</span>{% endraw %}, the derivatives are weak derivatives. This is the density subclass of the Nikol’ski class {% raw %}<span class="math inline">\(\mathcal H(\beta,L)\)</span>{% endraw %} used there. All norms in this section are over {% raw %}<span class="math inline">\(\mathbb R\)</span>{% endraw %}.</p>
<div id="thm:density-minimax-rate" class="theorem" data-note-kind="Theorem" data-note-number="4">
<p><strong>Theorem 4</strong> (Integrated density-estimation rate). For fixed {% raw %}<span class="math inline">\(\beta,L&gt;0\)</span>{% endraw %}, there are constants {% raw %}<span class="math inline">\(c_{\beta,L},C_{\beta,L}&gt;0\)</span>{% endraw %} such that, for all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
c_{\beta,L}n^{-2\beta/(2\beta+1)}
\le\inf_{\widehat p_n}\sup_{p\in\mathcal P(\beta,L)}
\mathbb E_p\|\widehat p_n-p\|_2^2
\le C_{\beta,L}n^{-2\beta/(2\beta+1)}.
\]</div>{% endraw %}
</div>
<h3 data-note-section="4.1" id="density-construction">4.1. Constructing densities in the class</h3>
<p>Choose a nonzero smooth function {% raw %}<span class="math inline">\(q\)</span>{% endraw %} with compact support in {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\int q=0\)</span>{% endraw %}. For example, take {% raw %}<span class="math inline">\(q=K&#39;\)</span>{% endraw %} for a nonconstant smooth function {% raw %}<span class="math inline">\(K\)</span>{% endraw %} with compact support in {% raw %}<span class="math inline">\((0,1)\)</span>{% endraw %}. The zero integral ensures that adding a bump does not change the total mass.</p>
<p>Let {% raw %}<span class="math inline">\(\varphi\)</span>{% endraw %} be the standard normal density and put {% raw %}<span class="math inline">\(p_0(x)=\sigma^{-1}\varphi(x/\sigma)\)</span>{% endraw %}. Choose {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} large enough that {% raw %}<span class="math inline">\(p_0\in\mathcal H(\beta,L/2)\)</span>{% endraw %}. To see that this is possible, define</p>
{% raw %}<div class="math display">\[
[g]_{\beta,2}\triangleq\sup_{t\ne0}
\frac{\|g^{(\ell)}(\cdot+t)-g^{(\ell)}\|_2}{|t|^\gamma}.
\]</div>{% endraw %}
<p>The bound {% raw %}<span class="math inline">\(\|g(\cdot+t)-g\|_2\le\min(2\|g\|_2,|t|\|g&#39;\|_2)\)</span>{% endraw %} shows that {% raw %}<span class="math inline">\([\varphi]_{\beta,2}&lt;\infty\)</span>{% endraw %}. A change of variables gives {% raw %}<span class="math inline">\([p_0]_{\beta,2}=\sigma^{-\beta-1/2}[\varphi]_{\beta,2}\)</span>{% endraw %}. Fix such a {% raw %}<span class="math inline">\(\sigma\)</span>{% endraw %} and write {% raw %}<span class="math inline">\(b=\min_{x\in[0,1]}p_0(x)&gt;0\)</span>{% endraw %}.</p>
<p>For an integer {% raw %}<span class="math inline">\(m\ge1\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(h=1/m\)</span>{% endraw %} and</p>
{% raw %}<div class="math display">\[
g_k(x)=a h^\beta q\left(\frac{x-(k-1)h}{h}\right),\qquad
u_\omega(x)=\sum_{k=1}^m\omega_k g_k(x),\qquad
p_\omega=p_0+u_\omega,
\]</div>{% endraw %}
<p>where {% raw %}<span class="math inline">\(\omega\in\{0,1\}^m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %} will be fixed independently of {% raw %}<span class="math inline">\(m\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. The supports of the bumps are disjoint subsets of {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %}. Consequently {% raw %}<span class="math inline">\(\int u_\omega=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\|u_\omega\|_\infty\le a h^\beta\|q\|_\infty\)</span>{% endraw %}. Taking {% raw %}<span class="math inline">\(a\|q\|_\infty\le b/2\)</span>{% endraw %} ensures that {% raw %}<span class="math inline">\(p_\omega\ge b/2\)</span>{% endraw %} on {% raw %}<span class="math inline">\([0,1]\)</span>{% endraw %} and that {% raw %}<span class="math inline">\(p_\omega=p_0&gt;0\)</span>{% endraw %} elsewhere. Every {% raw %}<span class="math inline">\(p_\omega\)</span>{% endraw %} integrates to one.</p>
<p>We must also check smoothness uniformly over all binary vectors. For each nonnegative integer {% raw %}<span class="math inline">\(r\)</span>{% endraw %}, disjoint supports and {% raw %}<span class="math inline">\(mh=1\)</span>{% endraw %} give</p>
{% raw %}<div class="math display">\[
\|u_\omega^{(r)}\|_2^2
=a^2h^{2\beta-2r+1}\|q^{(r)}\|_2^2\sum_{k=1}^m\omega_k
\le a^2h^{2\beta-2r}\|q^{(r)}\|_2^2.
\]</div>{% endraw %}
<p>Apply the translation bound above with {% raw %}<span class="math inline">\(r=\ell\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r=\ell+1\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(|t|\le h\)</span>{% endraw %}, use the derivative bound; if {% raw %}<span class="math inline">\(|t|&gt;h\)</span>{% endraw %}, use twice the norm. With {% raw %}<span class="math inline">\(C_q=\max(2\|q^{(\ell)}\|_2,\|q^{(\ell+1)}\|_2)\)</span>{% endraw %}, this gives</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\|u_\omega^{(\ell)}(\cdot+t)-u_\omega^{(\ell)}\|_2
&amp;\le a\min\left(2h^\gamma\|q^{(\ell)}\|_2,
|t|h^{\gamma-1}\|q^{(\ell+1)}\|_2\right)\\
&amp;\le a C_q|t|^\gamma.
\end{aligned}
\]</div>{% endraw %}
<p>Choose {% raw %}<span class="math inline">\(a\)</span>{% endraw %} small enough that also {% raw %}<span class="math inline">\(aC_q\le L/2\)</span>{% endraw %}. The triangle inequality then proves {% raw %}<span class="math inline">\(p_\omega\in\mathcal P(\beta,L)\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(\omega\)</span>{% endraw %}. This covers integer {% raw %}<span class="math inline">\(\beta\)</span>{% endraw %} as well, for which {% raw %}<span class="math inline">\(\gamma=1\)</span>{% endraw %}.</p>
<h3 data-note-section="4.2" id="density-separation-and-divergence">4.2. Separation and divergence</h3>
<p>Choose {% raw %}<span class="math inline">\(\omega^{(0)},\ldots,\omega^{(M)}\)</span>{% endraw %} by Lemma 1. Because the bumps have disjoint supports,</p>
{% raw %}<div class="math display">\[
\begin{aligned}
\|p_{\omega^{(j)}}-p_{\omega^{(k)}}\|_2^2
&amp;=a^2h^{2\beta+1}\|q\|_2^2H(\omega^{(j)},\omega^{(k)})\\
&amp;\ge\frac{a^2\|q\|_2^2}{8}h^{2\beta}.
\end{aligned}
\]</div>{% endraw %}
<p>To bound divergence, use {% raw %}<span class="math inline">\(\log(1+v)\le v\)</span>{% endraw %} for {% raw %}<span class="math inline">\(v&gt;-1\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\int u_\omega=0\)</span>{% endraw %}. Writing {% raw %}<span class="math inline">\(P_p\)</span>{% endraw %} for the law of one observation with density {% raw %}<span class="math inline">\(p\)</span>{% endraw %}, we obtain</p>
{% raw %}<div class="math display">\[
\begin{aligned}
D(P_{p_\omega}\|P_{p_0})
&amp;=\int(p_0+u_\omega)\log\left(1+\frac{u_\omega}{p_0}\right)\\
&amp;\le\int u_\omega+\int\frac{u_\omega^2}{p_0}
\le b^{-1}\|u_\omega\|_2^2
\le A h^{2\beta},\qquad A=\frac{a^2\|q\|_2^2}{b}.
\end{aligned}
\]</div>{% endraw %}
<p>The data contain {% raw %}<span class="math inline">\(n\)</span>{% endraw %} independent observations. Their log likelihood ratio is a sum, so their divergence is</p>
{% raw %}<div class="math display">\[
D(P_{p_\omega}^{\otimes n}\|P_{p_0}^{\otimes n})
=nD(P_{p_\omega}\|P_{p_0})\le A n h^{2\beta}.
\]</div>{% endraw %}
<p>Choose a fixed {% raw %}<span class="math inline">\(B\ge1\)</span>{% endraw %} sufficiently large that {% raw %}<span class="math inline">\(8A/(B^{2\beta+1}\log2)\le1/8\)</span>{% endraw %}, and set</p>
{% raw %}<div class="math display">\[
m=\left\lceil Bn^{1/(2\beta+1)}\right\rceil,\qquad h=\frac1m.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(\log(M+1)\ge m\log2/8\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\frac{D(P_{p_\omega}^{\otimes n}\|P_{p_0}^{\otimes n})}{\log(M+1)}
\le\frac{8A n}{m^{2\beta+1}\log2}\le\frac18.
\]</div>{% endraw %}
<p>For all sufficiently large {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, we also have {% raw %}<span class="math inline">\(m\ge32\)</span>{% endraw %}. Lemma 2, with {% raw %}<span class="math inline">\(\delta^2=a^2\|q\|_2^2h^{2\beta}/32\)</span>{% endraw %}, now proves</p>
{% raw %}<div class="math display">\[
\inf_{\widehat p_n}\sup_{p\in\mathcal P(\beta,L)}\mathbb E_p\|\widehat p_n-p\|_2^2
\ge\frac{a^2\|q\|_2^2}{64}h^{2\beta}
\ge c_{\beta,L}n^{-2\beta/(2\beta+1)}.
\]</div>{% endraw %}
<p>The last inequality uses {% raw %}<span class="math inline">\(m\le2Bn^{1/(2\beta+1)}\)</span>{% endraw %}. Thus a large packing of valid densities gives a lower bound for every estimator.</p>
<h3 data-note-section="4.3" id="density-upper-bound">4.3. Matching the kernel upper bound</h3>
<p>The <a href="{% post_url 2023-03-16-kernel-density-estimation-pointwise-and-integrated-risk %}#mean-integrated-squared-error">integrated-risk calculation for kernel estimators</a> gives, uniformly over {% raw %}<span class="math inline">\(\mathcal P(\beta,L)\)</span>{% endraw %},</p>
{% raw %}<div class="math display">\[
\mathbb E_p\|\widehat p_{n,s}-p\|_2^2
\le C_{\beta,K}L^2s^{2\beta}+\frac{\|K\|_2^2}{ns}.
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(K\)</span>{% endraw %} is a square-integrable kernel with integral one, vanishing moments through order {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(\int |u|^\beta|K(u)|\,du&lt;\infty\)</span>{% endraw %}. The polynomial kernel constructed in that post satisfies these conditions. Taking {% raw %}<span class="math inline">\(s\asymp n^{-1/(2\beta+1)}\)</span>{% endraw %} proves the upper bound in Theorem 4. ◻</p>
<p>Both examples balance squared separation against the information in the observations. In the sequence model, there are {% raw %}<span class="math inline">\(m\)</span>{% endraw %} uncertain coefficients with total squared size of order {% raw %}<span class="math inline">\(m\varepsilon^2\)</span>{% endraw %}, constrained by {% raw %}<span class="math inline">\(m\varepsilon^2\lesssim Qm^{-2\beta}\)</span>{% endraw %}. In density estimation, there are {% raw %}<span class="math inline">\(m=1/h\)</span>{% endraw %} local perturbations, and the divergence condition is {% raw %}<span class="math inline">\(nh^{2\beta}\lesssim m\)</span>{% endraw %}. Each balance gives the exponent {% raw %}<span class="math inline">\(2\beta/(2\beta+1)\)</span>{% endraw %} when the noise variance is of order {% raw %}<span class="math inline">\(1/n\)</span>{% endraw %}.</p>
<p>These arguments establish minimax rates up to constant factors. Asymptotic efficiency asks for the stronger conclusion {% raw %}<span class="math inline">\(r_n(\widehat\theta_n,\Theta)/\mathcal R_n^*(\Theta)\to1\)</span>{% endraw %}. For the Sobolev ellipsoid, <a href="{% post_url 2023-07-17-the-gaussian-sequence-model-and-pinskers-theorem %}#thm:pinsker">Pinsker’s theorem</a> identifies the sharp constant and an estimator attaining it; the packing argument here explains why the rate itself cannot be improved.</p>

<nav class="note-series" aria-label="Notes in this series"><p>Related reading: <a href="{% post_url 2023-03-16-kernel-density-estimation-pointwise-and-integrated-risk %}">Kernel Density Estimation: Pointwise and Integrated Risk</a> · <a href="{% post_url 2023-10-17-projection-estimators-and-linear-minimax-risk %}">Projection Estimators and Linear Minimax Risk</a> · <a href="{% post_url 2023-07-17-the-gaussian-sequence-model-and-pinskers-theorem %}">The Gaussian Sequence Model and Pinsker’s Theorem</a></p></nav>

</div>
