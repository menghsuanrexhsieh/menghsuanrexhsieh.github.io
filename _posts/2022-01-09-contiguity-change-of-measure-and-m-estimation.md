---
layout: "post"
title: "Contiguity, Change of Measure, and M-Estimation"
date: "2022-01-09"
tags: ["statistics", "asymptotic theory"]
excerpt: "Contiguity transfers negligible remainders between sequences of laws; likelihood ratios determine the change in the limiting distribution."
note_series: "Contiguity and M-estimation"
note_source: "assets/notes/Overleaf Projects (32 items)/M-Estimation and Contiguity/main.tex"
redirect_from: ["/2022/05/07/absolute-continuity-and-contiguity/", "/2022/05/07/contiguity-change-of-measure-and-m-estimation/", "/2022/06/04/the-argmax-theorem/"]
---

<div class="note-content" markdown="0">
<p>Let {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} be a reference law and {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} an alternative law for the same observations. Contiguity gives conditions under which an error that vanishes in {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probability also vanishes in {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}-probability. A joint limit with the likelihood ratio then determines the distribution under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}. These results allow a null expansion of an estimator or test statistic to be used under local alternatives.</p>

<p>The first three sections introduce local alternatives, define contiguity, and characterize it through likelihood ratios. The subsequent results derive local asymptotic normality and the Gaussian mean shift, then apply them to M-estimators. The main text includes the calculations used in applications. Appendices A–C contain the longer likelihood and argmax proofs.</p>

<h2 id="08-0-calibration-example">1. Normal location alternatives</h2>
<p>Suppose a scale is used {% raw %}<span class="math inline">\(n\)</span>{% endraw %} times to weigh an object whose true weight has already been subtracted. The readings are independent with variance one. Under correct calibration their mean is zero; under a small calibration error their mean is {% raw %}<span class="math inline">\(h/\sqrt n\)</span>{% endraw %}. Write the laws of the <strong>whole sample</strong> as</p>

{% raw %}<div class="math display">\[
P_n=\mathcal{N}(0,1)^{\otimes n},\qquad
Q_{n,h}=\mathcal{N}(h/\sqrt n,1)^{\otimes n}.
\]</div>{% endraw %}
<p>Under both laws, {% raw %}<span class="math inline">\(\overline X_n\xrightarrow{P}0\)</span>{% endraw %} in probability. Consistency therefore gives the same answer in the two experiments. But the uncertainty in the average is also of order {% raw %}<span class="math inline">\(n^{-1/2}\)</span>{% endraw %}. On that scale,</p>

{% raw %}<div class="math display">\[
Z_n\triangleq\sqrt n\,\overline X_n
\sim\begin{cases}
\mathcal{N}(0,1),&amp;\text{under }P_n,\\
\mathcal{N}(h,1),&amp;\text{under }Q_{n,h}.
\end{cases}
\]</div>{% endraw %}
<p>For example, the level-{% raw %}<span class="math inline">\(\alpha\)</span>{% endraw %} test that rejects when {% raw %}<span class="math inline">\(Z_n&gt;z_{1-\alpha}\)</span>{% endraw %} has power</p>

{% raw %}<div class="math display">\[
Q_{n,h}(Z_n&gt;z_{1-\alpha})
=1-\Phi(z_{1-\alpha}-h).
\]</div>{% endraw %}
<p>Here {% raw %}<span class="math inline">\(\Phi\)</span>{% endraw %} is the standard normal cdf and {% raw %}<span class="math inline">\(z_{1-\alpha}=\Phi^{-1}(1-\alpha)\)</span>{% endraw %}. The calibration error goes to zero, but its effect on rejection probability does not.</p>
<p>The normal calculation identifies the scale at which a vanishing calibration error still affects power. In a more complicated problem, we may have proved an expansion only under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
T_n=\frac1{\sqrt n}\sum_{i=1}^n\psi(X_i)+R_n,
\qquad R_n=o_{P_n}(1),
\]</div>{% endraw %}
<p>and want the law of {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_{n,h}\)</span>{% endraw %}. There are two separate tasks. We must show that the remainder still vanishes under the alternative, and then find the alternative law of the leading term. Contiguity handles the first task; likelihood-ratio tilting handles the second.</p>
<h3 id="08-0-the-sample-likelihood-ratio-locates-the-relevant-scale">Likelihood ratios and the scale of the alternative</h3>
<p>For a general shift {% raw %}<span class="math inline">\(\delta_n\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(a_n=\sqrt n\,\delta_n\)</span>{% endraw %}. Subtracting the two normal log densities gives</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\log L_n
&amp;\triangleq\log\frac{dQ_n}{dP_n}(X_1,\ldots,X_n)\\
&amp;=-\frac12\sum_{i=1}^n\bigl((X_i-\delta_n)^2-X_i^2\bigr)\\
&amp;=\delta_n\sum_{i=1}^nX_i-\frac{n\delta_n^2}{2}
=a_nZ_n-\frac{a_n^2}{2}.
\end{aligned}
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a_n=h\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\mathbb{E}_{P_n}L_n^2=e^{h^2}\)</span>{% endraw %}. Cauchy–Schwarz consequently gives, for every sample event {% raw %}<span class="math inline">\(A_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
Q_{n,h}(A_n)
=\mathbb{E}_{P_n}[L_n\mathbf1_{A_n}]
\le e^{h^2/2}\sqrt{P_n(A_n)}.
\]</div>{% endraw %}
<p>The reverse likelihood ratio has the same second moment under {% raw %}<span class="math inline">\(Q_{n,h}\)</span>{% endraw %}, so the implication works in both directions. Any event becoming negligible under one experiment becomes negligible under the other. Mutual contiguity also holds for bounded sequences {% raw %}<span class="math inline">\(a_n\)</span>{% endraw %}, even when those sequences do not converge.</p>
<p>With total variation defined as {% raw %}<span class="math inline">\(\|Q_n-P_n\|_{\mathrm{TV}}=\sup_A|Q_n(A)-P_n(A)|\)</span>{% endraw %}, the likelihood-ratio rejection region gives</p>


{% raw %}<div class="math display">\[
\|Q_n-P_n\|_{\rm TV}=2\Phi(|a_n|/2)-1.
\]</div>{% endraw %}
<p>For {% raw %}<span class="math inline">\(a_n&gt;0\)</span>{% endraw %}, the maximizing event is {% raw %}<span class="math inline">\(\{Z_n&gt;a_n/2\}\)</span>{% endraw %}: subtract its probabilities under {% raw %}<span class="math inline">\(\mathcal{N}(a_n,1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathcal{N}(0,1)\)</span>{% endraw %}. Symmetry gives the same formula when {% raw %}<span class="math inline">\(a_n&lt;0\)</span>{% endraw %}.</p>
<p>If {% raw %}<span class="math inline">\(a_n\to0\)</span>{% endraw %}, the two experiments become close even in total variation. If {% raw %}<span class="math inline">\(a_n\to h\ne0\)</span>{% endraw %}, their distance stays positive, but their negligible events agree. If {% raw %}<span class="math inline">\(|a_n|\to\infty\)</span>{% endraw %}, the event {% raw %}<span class="math inline">\(\{\operatorname{sgn}(a_n)Z_n&gt;|a_n|/2\}\)</span>{% endraw %} has probability tending to zero under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and to one under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}. Thus an alternative can be too close to detect, locally distinguishable, or consistently distinguishable, depending on its size relative to sampling error.</p>
<p><span id="basics"></span></p>
<h2 id="08-0-basics">2. Contiguity and likelihood ratios</h2>
<p>Let {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} be probability measures on {% raw %}<span class="math inline">\((\Omega_n,\mathcal A_n)\)</span>{% endraw %}. The sample spaces may vary with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}; no independence, density model, or Euclidean parameter is required here.</p>
<p><span id="result-7"></span></p>
<div class="definition" data-note-kind="Definition" data-note-number="1" id="contiguity-definition">
<p><strong>Definition 1</strong>. We write {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %} if, for every sequence {% raw %}<span class="math inline">\(A_n\in\mathcal A_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
P_n(A_n)\to0\quad\Longrightarrow\quad Q_n(A_n)\to0.
\]</div>{% endraw %}
<p>The sequences are mutually contiguous when both {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(P_n\lhd Q_n\)</span>{% endraw %} hold.</p>
</div>
<p>The notation {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %} specifies the direction in which negligible probabilities transfer. It permits different nondegenerate limiting distributions under the two laws, as in the normal location example.</p>

<p>An equivalent form is asymptotic uniform absolute continuity: for each {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} there are {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n_0\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
n\ge n_0,\quad P_n(A)&lt;\delta
\quad\Longrightarrow\quad Q_n(A)&lt;\varepsilon
\qquad(A\in\mathcal A_n).
\]</div>{% endraw %}
<p>To prove this from contiguity, suppose it fails. Choose increasing {% raw %}<span class="math inline">\(n_k\)</span>{% endraw %} and events {% raw %}<span class="math inline">\(A_{n_k}\)</span>{% endraw %} with {% raw %}<span class="math inline">\(P_{n_k}(A_{n_k})&lt;1/k\)</span>{% endraw %} but {% raw %}<span class="math inline">\(Q_{n_k}(A_{n_k})\ge\varepsilon\)</span>{% endraw %}, and use the empty event at other indices. This contradicts the definition. The converse follows by applying the displayed implication to any sequence whose {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probabilities vanish.</p>
<p>The requirement that one choice of {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} work for all sufficiently large indices explains why absolute continuity separately at each {% raw %}<span class="math inline">\(n\)</span>{% endraw %} is insufficient. The allowed {% raw %}<span class="math inline">\(\delta\)</span>{% endraw %} could deteriorate with {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. In the calibration example, normal sample laws are mutually absolutely continuous even when {% raw %}<span class="math inline">\(|a_n|\to\infty\)</span>{% endraw %} and the experiments separate completely.</p>
<p>Conversely, contiguity does not require finite-sample absolute continuity. On {% raw %}<span class="math inline">\(\{0,1\}\)</span>{% endraw %}, take {% raw %}<span class="math inline">\(P_n=\delta_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n=(1-1/n)\delta_0+n^{-1}\delta_1\)</span>{% endraw %}. Their total variation distance is {% raw %}<span class="math inline">\(1/n\)</span>{% endraw %}, so they are mutually contiguous, although {% raw %}<span class="math inline">\(Q_n\not\ll P_n\)</span>{% endraw %} for any finite {% raw %}<span class="math inline">\(n\)</span>{% endraw %}.</p>
<div class="lemma" id="contiguity-stochastic-order">
<p><strong>Lemma (Transfer of stochastic order).</strong> Suppose {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(a_n&gt;0\)</span>{% endraw %} is deterministic. For measurable Euclidean-valued {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %}, {% raw %}<span class="math display">\[
T_n=o_{P_n}(a_n)\ \Longrightarrow\ T_n=o_{Q_n}(a_n),\qquad
T_n=O_{P_n}(a_n)\ \Longrightarrow\ T_n=O_{Q_n}(a_n).
\]</span>{% endraw %}</p>
</div>
<p><em>Proof.</em> Apply the definition to {% raw %}<span class="math inline">\(\{\|T_n\|&gt;\varepsilon a_n\}\)</span>{% endraw %} for the first assertion. For the second, fix {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %} and choose {% raw %}<span class="math inline">\(\delta,n_0\)</span>{% endraw %} from asymptotic uniform absolute continuity. Boundedness in {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probability supplies {% raw %}<span class="math inline">\(K\)</span>{% endraw %} such that {% raw %}<span class="math inline">\(P_n(\|T_n\|&gt;Ka_n)&lt;\delta\)</span>{% endraw %} eventually. The corresponding {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}-probabilities are then below {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. This proves boundedness in {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}-probability. In a general metric space the same argument transfers compact containment when that stronger property is assumed. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<h3 id="08-0-likelihood-ratios-when-singular-parts-are-present">Likelihood ratios with singular parts</h3>
<p><span id="result-1"></span><span id="result-2"></span><span id="result-3"></span><span id="result-4"></span><span id="result-5"></span><span id="result-6"></span></p>
<p>Recall that {% raw %}<span class="math inline">\(Q\ll P\)</span>{% endraw %} means {% raw %}<span class="math inline">\(P(A)=0\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(Q(A)=0\)</span>{% endraw %} for every measurable {% raw %}<span class="math inline">\(A\)</span>{% endraw %}. Two measures are mutually singular if there is a measurable set carrying all of one measure and none of the other. A pair of measures need be neither absolutely continuous in a given direction nor mutually singular; this is why we keep both parts of the decomposition below.</p>
<p>Set {% raw %}<span class="math inline">\(\mu_n=P_n+Q_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p_n=dP_n/d\mu_n\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(q_n=dQ_n/d\mu_n\)</span>{% endraw %}. Define</p>

{% raw %}<div class="math display">\[
L_n=\frac{q_n}{p_n}\mathbf1_{\{p_n&gt;0\}},\qquad
R_n=\frac{p_n}{q_n}\mathbf1_{\{q_n&gt;0\}},\qquad
s_n=Q_n(p_n=0),
\]</div>{% endraw %}
<p>where the displayed ratios are set to zero when their denominators vanish. These are derivatives of the absolutely continuous parts. In particular, {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} need not equal {% raw %}<span class="math inline">\(1/L_n\)</span>{% endraw %} on the singular pieces.</p>
<p>For any measurable {% raw %}<span class="math inline">\(A\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
Q_n(A)=\mathbb{E}_{P_n}[L_n\mathbf1_A]
       +Q_n(A\cap\{p_n=0\}),\qquad
\mathbb{E}_{P_n}L_n=1-s_n.
\]</div>{% endraw %}
<p>Indeed, the first term is {% raw %}<span class="math inline">\(\int_{A\cap\{p_n&gt;0\}}q_n\,d\mu_n\)</span>{% endraw %}; the second accounts for the rest. The first measure is absolutely continuous with respect to {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}, and the second is concentrated on a {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-null set, giving the Lebesgue decomposition. More generally, for bounded measurable {% raw %}<span class="math inline">\(f\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{Q_n}f(X_n)
=\mathbb{E}_{P_n}[f(X_n)L_n]
 +\int_{\{p_n=0\}}f(X_n)\,dQ_n.
\]</div>{% endraw %}
<p>The singular contribution has absolute value at most {% raw %}<span class="math inline">\(\|f\|_\infty s_n\)</span>{% endraw %}. It must be included unless {% raw %}<span class="math inline">\(Q_n\ll P_n\)</span>{% endraw %}. The <a href="{% post_url 2021-11-29-the-radon-nikodym-theorem %}">Radon–Nikodym note</a> develops the underlying decomposition.</p>

<p><span id="result-9"></span></p>
<h2 id="08-0-le-cam-first">3. Le Cam’s first lemma</h2>
<div class="lemma" data-note-kind="Lemma" data-note-number="2" id="le-cam-first-lemma">
<p><strong>Lemma 2</strong>. For the experiments and ratios above, the following statements are equivalent.</p>
<ol type="1">
<li><p>{% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %}.</p></li>
<li><p>{% raw %}<span class="math inline">\(s_n\to0\)</span>{% endraw %} and the likelihood ratios are uniformly integrable under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\lim_{K\to\infty}\sup_n
\mathbb{E}_{P_n}[L_n\mathbf1_{\{L_n&gt;K\}}]=0.
\]</div>{% endraw %}</li>
<li><p>Every subsequential distributional limit {% raw %}<span class="math inline">\(L\)</span>{% endraw %} of {% raw %}<span class="math inline">\(L_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(\mathbb{E}L=1\)</span>{% endraw %}.</p></li>
<li><p>Every subsequential distributional limit {% raw %}<span class="math inline">\(R\)</span>{% endraw %} of {% raw %}<span class="math inline">\(R_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} satisfies {% raw %}<span class="math inline">\(P(R&gt;0)=1\)</span>{% endraw %}.</p></li>
<li><p>For every sequence of measurable real statistics {% raw %}<span class="math inline">\(T_n\)</span>{% endraw %}, {% raw %}<span class="math inline">\(T_n=o_{P_n}(1)\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(T_n=o_{Q_n}(1)\)</span>{% endraw %}.</p></li>
</ol>
<p>The quantifiers in 3 and 4 concern <strong>every</strong> convergent subsequence.</p>
</div>
<p>The likelihood ratio tells us how much alternative probability is attached to a sample that is rare under the reference law. There are two ways probability can be lost from a proposed likelihood limit: a nonvanishing singular part, or increasingly large ratios on increasingly rare events. Statement 2 rules out both.</p>
<p><span id="result-8"></span></p>
<p>When {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} are mutually absolutely continuous at every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, apply statement 2 in each direction: mutual contiguity is equivalent to uniform integrability of {% raw %}<span class="math inline">\(L_n\)</span>{% endraw %} under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L_n^{-1}\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}.</p>
<p>The proof is given in <a href="#contiguity-appendix-first">Appendix A</a>.</p>
<h3 id="08-0-the-lognormal-criterion">The lognormal criterion</h3>
<p>If, under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\log L_n\Rightarrow Z,
\qquad Z\sim\mathcal{N}(-\sigma^2/2,\sigma^2),
\]</div>{% endraw %}
<p>then {% raw %}<span class="math inline">\(L_n\Rightarrow e^Z\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\mathbb{E}e^Z=e^{-\sigma^2/2+\sigma^2/2}=1,
\qquad P(e^Z&gt;0)=1.
\]</div>{% endraw %}
<p>A Gaussian log likelihood has the required exponential moment. The mean-one characterization gives {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %}. Applying the positivity characterization with the roles of {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} interchanged gives {% raw %}<span class="math inline">\(P_n\lhd Q_n\)</span>{% endraw %}. This includes {% raw %}<span class="math inline">\(\sigma^2=0\)</span>{% endraw %}, where the limit is the constant one. The negative half-variance term is precisely what normalizes the limiting likelihood ratio.</p>
<h2 id="08-0-le-cam-second">4. Square-root likelihood expansions</h2>
<p>The next issue is how to obtain that lognormal likelihood limit. Ordinary Taylor expansion of {% raw %}<span class="math inline">\(\log p_\theta\)</span>{% endraw %} can demand derivatives or domination conditions that are unnecessary. Square roots of densities already belong to an {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} space, which gives a more flexible expansion.</p>
<p>We prove a Lindeberg form of the second lemma for independent, non-identically distributed observations. Its assumptions explicitly control the small increments and any singular mass. The general uniformly asymptotically negligible formulation and its truncation proof are given in <a href="https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch3-rev4b.pdf#page=29">Wellner’s Chapter 3, Lemma 3.3</a>. The version below includes the quadratic-mean differentiable i.i.d. application, which we then derive.</p>
<div class="lemma" data-note-kind="Lemma" data-note-number="3" id="le-cam-second-lemma">
<p><strong>Lemma 3</strong>. Let {% raw %}<span class="math inline">\(P_n=\bigotimes_{i=1}^{k_n}P_{ni}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n=\bigotimes_{i=1}^{k_n}Q_{ni}\)</span>{% endraw %}, with coordinate densities {% raw %}<span class="math inline">\(p_{ni},q_{ni}\)</span>{% endraw %} relative to a common dominating measure for each coordinate. Under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}, define</p>

{% raw %}<div class="math display">\[
T_{ni}=2\left(\sqrt{\frac{q_{ni}(X_{ni})}{p_{ni}(X_{ni})}}-1\right),
\qquad s_{ni}=Q_{ni}(p_{ni}=0).
\]</div>{% endraw %}
<p>Suppose, for some finite {% raw %}<span class="math inline">\(\sigma^2\ge0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sum_i s_{ni}\to0,\qquad
\sum_i\mathbb{E}_{P_n}T_{ni}^2\to\sigma^2,
\]</div>{% endraw %}
<p>and, for every {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sum_i\mathbb{E}_{P_n}
 [T_{ni}^2\mathbf1_{\{|T_{ni}|&gt;\varepsilon\}}]\to0.
\]</div>{% endraw %}
<p>Then, writing {% raw %}<span class="math inline">\(W_n=\sum_iT_{ni}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(L_n=dQ_n^a/dP_n\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
W_n&amp;\Rightarrow\mathcal{N}(-\sigma^2/4,\sigma^2),\\
\log L_n&amp;=W_n-\sigma^2/4+o_{P_n}(1)
\Rightarrow\mathcal{N}(-\sigma^2/2,\sigma^2).
\end{aligned}
\]</div>{% endraw %}
<p>Consequently {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} are mutually contiguous.</p>
</div>
<p>The product likelihood and its singular part can be identified explicitly. The set {% raw %}<span class="math inline">\(A_n=\bigcap_i\{p_{ni}&gt;0\}\)</span>{% endraw %} has full {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probability. On it the derivative of the absolutely continuous part of {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} is {% raw %}<span class="math inline">\(\prod_i(q_{ni}/p_{ni})\)</span>{% endraw %}; the remaining part is supported on the {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-null complement. Independence under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[Q_n(A_n^c)=1-\prod_i(1-s_{ni})\le\sum_i s_{ni}\longrightarrow0.\]</div>{% endraw %}

<p>The vanishing bound on the product experiment’s singular mass proves that coordinate support changes cannot leave a nonvanishing singular part in the product experiment. It also justifies the product formula for {% raw %}<span class="math inline">\(L_n\)</span>{% endraw %} used in the logarithm calculation.</p>
<p>The proof is given in <a href="#contiguity-appendix-second">Appendix B</a>.</p>
<h2 id="08-0-qmd-to-lan">5. Quadratic-mean differentiability and LAN</h2>
<p>Let {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} be an interior point of a parameter set in {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(p_\theta\)</span>{% endraw %} be densities relative to a fixed measure {% raw %}<span class="math inline">\(\mu\)</span>{% endraw %}. The model is differentiable in quadratic mean at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} if there is a score {% raw %}<span class="math inline">\(\ell\in L^2(P_{\theta_0})^d\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\int\left(\sqrt{p_{\theta_0+t}}-\sqrt{p_{\theta_0}}
 -\frac12t^\top\ell\sqrt{p_{\theta_0}}\right)^2d\mu
=o(\|t\|^2).
\]</div>{% endraw %}
<p>The derivative is taken in an integrated square-root metric. Pointwise derivatives of the density are one way to verify it, but are not part of the definition. See the companion notes on <a href="{% post_url 2022-04-13-quadratic-mean-differentiability %}">quadratic-mean differentiability</a> and <a href="{% post_url 2023-03-04-local-asymptotic-normality %}">local asymptotic normality</a>.</p>
<div class="theorem" data-note-kind="Theorem" data-note-number="4" id="qmd-lan-theorem">
<p><strong>Theorem 4</strong>. Under this assumption, {% raw %}<span class="math inline">\(\mathbb{E}_{\theta_0}\ell=0\)</span>{% endraw %}. Put {% raw %}<span class="math inline">\(I=\mathbb{E}_{\theta_0}[\ell\ell^\top]\)</span>{% endraw %}. For each fixed {% raw %}<span class="math inline">\(h\in\mathbb R^d\)</span>{% endraw %}, with observations i.i.d. under {% raw %}<span class="math inline">\(P_{\theta_0}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\log\frac{d(P_{\theta_0+h/\sqrt n}^{\otimes n})^a}
 {dP_{\theta_0}^{\otimes n}}
&amp;=h^\top\Delta_n-\frac12h^\top I h+o_{P_{\theta_0}^{\otimes n}}(1),\\
\Delta_n&amp;=\frac1{\sqrt n}\sum_{i=1}^n\ell(X_i)
\Rightarrow\mathcal{N}_d(0,I).
\end{aligned}
\]</div>{% endraw %}
<p>The two product laws are mutually contiguous.</p>
</div>
<p><em>Remark.</em> In the proof of <a href="#qmd-lan-theorem">Theorem 4</a>, positive definiteness of {% raw %}<span class="math inline">\(I\)</span>{% endraw %} is not assumed. Positive definiteness is needed later when we invert {% raw %}<span class="math inline">\(I\)</span>{% endraw %}.</p>
<h3 id="08-0-proof-support-changes-means-and-the-l2-remainder">Derivation of the likelihood expansion</h3>
<p>Write {% raw %}<span class="math inline">\(p_0=p_{\theta_0}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(p_t=p_{\theta_0+t}\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
T_t=2\left(\sqrt{p_t/p_0}-1\right)
\quad P_{\theta_0}\text{-a.s.},\qquad
s_t=\int_{\{p_0=0\}}p_t\,d\mu.
\]</div>{% endraw %}
<p>On {% raw %}<span class="math inline">\(\{p_0=0\}\)</span>{% endraw %} the entire QMD integrand is {% raw %}<span class="math inline">\(p_t\)</span>{% endraw %}. On its complement, divide the square-root expansion by {% raw %}<span class="math inline">\(\sqrt{p_0}/2\)</span>{% endraw %}. Consequently,</p>

{% raw %}<div class="math display">\[
s_t=o(\|t\|^2),\qquad
\mathbb{E}_0(T_t-t^\top\ell)^2=o(\|t\|^2),\qquad
\mathbb{E}_0T_t^2=t^\top I t+o(\|t\|^2).
\]</div>{% endraw %}
<p>The normalization identity from the second lemma gives {% raw %}<span class="math inline">\(\mathbb{E}_0T_t=-\mathbb{E}_0T_t^2/4-s_t=O(\|t\|^2)\)</span>{% endraw %}. On the other hand, Cauchy–Schwarz applied to the QMD remainder gives {% raw %}<span class="math inline">\(\mathbb{E}_0T_t=t^\top\mathbb{E}_0\ell+o(\|t\|)\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(t\)</span>{% endraw %} approach zero along each coordinate direction. Comparing the two equations proves {% raw %}<span class="math inline">\(\mathbb{E}_0\ell=0\)</span>{% endraw %}.</p>
<p>Now fix {% raw %}<span class="math inline">\(h\)</span>{% endraw %} and take {% raw %}<span class="math inline">\(t=h/\sqrt n\)</span>{% endraw %}. With {% raw %}<span class="math inline">\(V_n=\sqrt n\,T_{h/\sqrt n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(V=h^\top\ell\)</span>{% endraw %} as functions of one observation, we have {% raw %}<span class="math inline">\(V_n\to V\)</span>{% endraw %} in {% raw %}<span class="math inline">\(L^2(P_{\theta_0})\)</span>{% endraw %}. In particular the squares are uniformly integrable. One can see the required tail estimate directly. For fixed {% raw %}<span class="math inline">\(A\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\mathbb{E}_0[V_n^2\mathbf1_{\{|V_n|&gt;A\}}]
\le2\mathbb{E}_0(V_n-V)^2
 +2\mathbb{E}_0[V^2\mathbf1_{\{|V_n|&gt;A\}}].
\]</div>{% endraw %}
<p>In the second term split into {% raw %}<span class="math inline">\(\{|V|&gt;A/2\}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\{|V_n-V|&gt;A/2\}\)</span>{% endraw %}. The first part has arbitrarily small expectation for large {% raw %}<span class="math inline">\(A\)</span>{% endraw %}; for fixed {% raw %}<span class="math inline">\(A\)</span>{% endraw %} the second vanishes as {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, by {% raw %}<span class="math inline">\(L^2\)</span>{% endraw %} convergence and integrability of {% raw %}<span class="math inline">\(V^2\)</span>{% endraw %}. Finitely many initial {% raw %}<span class="math inline">\(n\)</span>{% endraw %} have integrable tails as well. Hence, for each {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
n\mathbb{E}_0[T_{h/\sqrt n}^2
 \mathbf1_{\{|T_{h/\sqrt n}|&gt;\varepsilon\}}]
=\mathbb{E}_0[V_n^2\mathbf1_{\{|V_n|&gt;\varepsilon\sqrt n\}}]
\longrightarrow0.
\]</div>{% endraw %}
<p>Also {% raw %}<span class="math inline">\(ns_{h/\sqrt n}\to0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(n\mathbb{E}_0T_{h/\sqrt n}^2\to h^\top I h\)</span>{% endraw %}. The singular-mass limit, the second-moment limit, and the preceding Lindeberg bound verify the three assumptions of the second lemma.</p>
<p>To identify the random linear term, let</p>

{% raw %}<div class="math display">\[
D_{ni}=T_{h/\sqrt n}(X_i)-\frac{h^\top\ell(X_i)}{\sqrt n}.
\]</div>{% endraw %}
<p>Independence and QMD imply</p>

{% raw %}<div class="math display">\[
\operatorname{Var}_0\left(\sum_{i=1}^nD_{ni}\right)
\le n\mathbb{E}_0D_{n1}^2\to0,
\qquad
n\mathbb{E}_0D_{n1}
=-\frac n4\mathbb{E}_0T_{h/\sqrt n}^2-ns_{h/\sqrt n}
\to-\frac14h^\top I h.
\]</div>{% endraw %}
<p>Consequently {% raw %}<span class="math inline">\(W_n=h^\top\Delta_n-h^\top Ih/4+o_{P_n}(1)\)</span>{% endraw %}. The logarithmic quadratic term contributes {% raw %}<span class="math inline">\(-h^\top Ih/4\)</span>{% endraw %}, giving the drift {% raw %}<span class="math inline">\(-h^\top Ih/2\)</span>{% endraw %}. The multivariate CLT gives the law of {% raw %}<span class="math inline">\(\Delta_n\)</span>{% endraw %}, and the lognormal criterion gives mutual contiguity.</p>

<p>The likelihood ratio converges to {% raw %}<span class="math inline">\(\exp(h^\top\Delta-h^\top Ih/2)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\Delta\sim\mathcal{N}_d(0,I)\)</span>{% endraw %}. The third lemma below shows that weighting by this ratio changes the mean of {% raw %}<span class="math inline">\(\Delta\)</span>{% endraw %} to {% raw %}<span class="math inline">\(Ih\)</span>{% endraw %}. First we extend the fixed-direction likelihood expansion to convergent directions.</p>


<p><span id="result-11"></span></p>
<div class="lemma" id="contiguity-sequential-lan">
<p><strong>Lemma (Convergent and bounded local directions).</strong> In the QMD model above, let {% raw %}<span class="math inline">\(h_n\to h\)</span>{% endraw %} and write {% raw %}<span class="math inline">\(Q_{n,u}=P_{\theta_0+u/\sqrt n}^{\otimes n}\)</span>{% endraw %}. Then {% raw %}<span class="math display">\[
\|Q_{n,h_n}-Q_{n,h}\|_{\mathrm{TV}}\to0,
\qquad
\log L_{n,h_n}=h_n^\top\Delta_n-\frac12h_n^\top Ih_n+o_{P_n}(1).
\]</span>{% endraw %} Every bounded deterministic sequence {% raw %}<span class="math inline">\(h_n\)</span>{% endraw %} gives mutual contiguity of {% raw %}<span class="math inline">\(Q_{n,h_n}\)</span>{% endraw %} and {% raw %}<span class="math inline">\(P_n=P_{\theta_0}^{\otimes n}\)</span>{% endraw %}.</p>
</div>
<p><em>Remark.</em> In the <a href="#contiguity-sequential-lan">lemma on convergent and bounded local directions</a>, the contiguity conclusion for bounded deterministic sequences does not require convergence of {% raw %}<span class="math inline">\(h_n\)</span>{% endraw %}. The total-variation convergence and likelihood expansion in the first conclusion are stated for convergent local directions.</p>
<p><em>Proof.</em> Define {% raw %}<span class="math inline">\(H^2(P,Q)=\int(\sqrt p-\sqrt q)^2d\mu\)</span>{% endraw %}. Subtracting the two QMD expansions gives {% raw %}<span class="math display">\[
\sqrt{p_{\theta_0+h_n/\sqrt n}}-\sqrt{p_{\theta_0+h/\sqrt n}}
=\frac{(h_n-h)^\top\ell\sqrt{p_{\theta_0}}}{2\sqrt n}
+o_{L^2(\mu)}(n^{-1/2}).
\]</span>{% endraw %} This also holds when {% raw %}<span class="math inline">\(h=0\)</span>{% endraw %}: a bounded sequence times a remainder that is {% raw %}<span class="math inline">\(o(\|t\|)\)</span>{% endraw %} remains {% raw %}<span class="math inline">\(o(n^{-1/2})\)</span>{% endraw %}. Hence the one-observation squared Hellinger distance is {% raw %}<span class="math inline">\(o(n^{-1})\)</span>{% endraw %}. With affinity {% raw %}<span class="math inline">\(\rho(P,Q)=\int\sqrt{pq}=1-H^2(P,Q)/2\)</span>{% endraw %}, {% raw %}<span class="math display">\[
H^2(P^{\otimes n},Q^{\otimes n})=2(1-\rho(P,Q)^n)\le nH^2(P,Q),
\qquad \|P-Q\|_{\mathrm{TV}}\le H(P,Q).
\]</span>{% endraw %} The first inequality follows from {% raw %}<span class="math inline">\(1-(1-x)^n\le nx\)</span>{% endraw %}; the second follows by factoring {% raw %}<span class="math inline">\(p-q\)</span>{% endraw %} into {% raw %}<span class="math inline">\((\sqrt p-\sqrt q)(\sqrt p+\sqrt q)\)</span>{% endraw %} and applying Cauchy–Schwarz. This proves total-variation convergence.</p>
<p>For the likelihood expansion, the absolutely continuous parts satisfy {% raw %}<span class="math display">\[
E_{P_n}|L_{n,h_n}-L_{n,h}|\le2\|Q_{n,h_n}-Q_{n,h}\|_{\mathrm{TV}}\to0.
\]</span>{% endraw %} The fixed-direction limit of {% raw %}<span class="math inline">\(L_{n,h}\)</span>{% endraw %} is strictly positive. Restricting both ratios to an interval bounded away from zero therefore shows that their logarithms differ by {% raw %}<span class="math inline">\(o_{P_n}(1)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(\Delta_n=O_{P_n}(1)\)</span>{% endraw %}, replacing {% raw %}<span class="math inline">\(h\)</span>{% endraw %} by {% raw %}<span class="math inline">\(h_n\)</span>{% endraw %} in the linear and quadratic terms changes them by {% raw %}<span class="math inline">\(o_{P_n}(1)\)</span>{% endraw %}.</p>
<p>If contiguity failed for a bounded sequence, a subsequence of events would have vanishing probability under one law and probability bounded away from zero under the other. Extract a further subsequence on which {% raw %}<span class="math inline">\(h_n\)</span>{% endraw %} converges. The sequential likelihood expansion and the lognormal criterion give mutual contiguity on that subsequence, a contradiction. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>For measurable {% raw %}<span class="math inline">\(0\le f_n\le1\)</span>{% endraw %}, total variation bounds {% raw %}<span class="math inline">\(|E_{Q_{n,h_n}}f_n-E_{Q_{n,h}}f_n|\)</span>{% endraw %}. Thus fixed-direction distributional limits transfer to convergent directions. A uniform approximation of a random likelihood process requires a separate equicontinuity argument; total-variation continuity alone is not that approximation.</p>
<h2 id="08-0-le-cam-third">6. Le Cam’s third lemma</h2>
<div class="lemma" data-note-kind="Lemma" data-note-number="5" id="le-cam-third-lemma">
<p><strong>Lemma 5</strong>. Suppose {% raw %}<span class="math inline">\(Q_n\lhd P_n\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} take values in a metric space {% raw %}<span class="math inline">\(S\)</span>{% endraw %}. Assume ordinary weak convergence of measurable random elements,</p>

{% raw %}<div class="math display">\[
(X_n,L_n)\xRightarrow[P_n]{}(X,L).
\]</div>{% endraw %}
<p>Then</p>

{% raw %}<div class="math display">\[
\nu(B)\triangleq\mathbb{E}[\mathbf1_{\{X\in B\}}L]
\]</div>{% endraw %}
<p>defines a probability measure on {% raw %}<span class="math inline">\(S\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(X_n\xRightarrow[Q_n]{}\nu\)</span>{% endraw %}.</p>
</div>
<p>The first lemma gives {% raw %}<span class="math inline">\(L\ge0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}L=1\)</span>{% endraw %}. Thus the formula is a probability measure: countable additivity follows from monotone convergence. It weights a limiting sample by its limiting likelihood ratio.</p>
<h3 id="08-0-proof-with-the-truncation-step-included">Proof of the change-of-measure formula</h3>
<p>Take bounded continuous {% raw %}<span class="math inline">\(f:S\to\mathbb R\)</span>{% endraw %}. For fixed {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, the function {% raw %}<span class="math inline">\((x,l)\mapsto f(x)(l\wedge K)\)</span>{% endraw %} is bounded and continuous on {% raw %}<span class="math inline">\(S\times[0,\infty)\)</span>{% endraw %}, so</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{P_n}[f(X_n)(L_n\wedge K)]
\to\mathbb{E}[f(X)(L\wedge K)].
\]</div>{% endraw %}
<p>The exact change-of-measure formula gives the bound</p>

{% raw %}<div class="math display">\[
\begin{aligned}
&amp;\left|\mathbb{E}_{Q_n}f(X_n)
 -\mathbb{E}_{P_n}[f(X_n)(L_n\wedge K)]\right|\\
&amp;\qquad\le\|f\|_\infty\left(s_n+
 \mathbb{E}_{P_n}(L_n-K)_+\right).
\end{aligned}
\]</div>{% endraw %}
<p>By the first lemma, {% raw %}<span class="math inline">\(s_n\to0\)</span>{% endraw %} and the tail expectation is uniformly small for large {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. The corresponding limiting error is at most {% raw %}<span class="math inline">\(\|f\|_\infty\mathbb{E}(L-K)_+\)</span>{% endraw %}, which also vanishes. Let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %}, then {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}, to obtain</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{Q_n}f(X_n)\to\mathbb{E}[f(X)L]=\int f\,d\nu.
\]</div>{% endraw %}
<p>This is the bounded-continuous-function characterization of weak convergence, completing the proof. Joint convergence is essential: the marginal limit of {% raw %}<span class="math inline">\(X_n\)</span>{% endraw %} alone says nothing about which values receive the larger likelihood weights.</p>
<h3 id="08-0-calculate-the-gaussian-mean-shift">Gaussian mean shifts</h3>
<p>The most frequently used form has a jointly normal statistic and log likelihood. Suppose</p>

{% raw %}<div class="math display">\[
\begin{pmatrix}T_n\\ \log L_n\end{pmatrix}
\xRightarrow[P_n]{}
\begin{pmatrix}T\\ Z\end{pmatrix}
\sim\mathcal{N}_{k+1}\left(
 \begin{pmatrix}m\\-\sigma^2/2\end{pmatrix},
 \begin{pmatrix}\Sigma&amp;c\\c^\top&amp;\sigma^2\end{pmatrix}\right).
\]</div>{% endraw %}
<p>The first lemma supplies mutual contiguity. To calculate the tilted law of {% raw %}<span class="math inline">\(T\)</span>{% endraw %}, evaluate its characteristic function:</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\mathbb{E}[e^{it^\top T}e^Z]
&amp;=\exp\left(it^\top m-\frac{\sigma^2}{2}
 +\frac12\bigl(-t^\top\Sigma t+2it^\top c+\sigma^2\bigr)\right)\\
&amp;=\exp\left(it^\top(m+c)-\frac12t^\top\Sigma t\right).
\end{aligned}
\]</div>{% endraw %}
<p>One can evaluate that transform even with singular covariance without a density or an inverse matrix. Represent {% raw %}<span class="math inline">\(T=m+AG\)</span>{% endraw %} and {% raw %}<span class="math inline">\(Z=-\sigma^2/2+b^\top G\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(G\)</span>{% endraw %} a vector of independent standard normals, {% raw %}<span class="math inline">\(AA^\top=\Sigma\)</span>{% endraw %}, {% raw %}<span class="math inline">\(Ab=c\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(b^\top b=\sigma^2\)</span>{% endraw %}. For a real pair {% raw %}<span class="math inline">\(u,v\)</span>{% endraw %}, direct Gaussian integration gives {% raw %}<span class="math inline">\(\mathbb E e^{(u+iv)G_1}=\exp((u+iv)^2/2)\)</span>{% endraw %}. Multiplying these one-dimensional transforms gives</p>

{% raw %}<div class="math display">\[\mathbb E e^{it^\top T+Z}=e^{it^\top m-\sigma^2/2}\exp\{(b+iA^\top t)^\top(b+iA^\top t)/2\},\]</div>{% endraw %}

<p>which simplifies to the displayed characteristic function. The exponential is integrable because its modulus is {% raw %}<span class="math inline">\(e^Z\)</span>{% endraw %}, whose expectation is one.</p>
<p>Therefore the alternative limit is</p>


{% raw %}<div class="math display">\[
T_n\xRightarrow[Q_n]{}\mathcal{N}_k(m+c,\Sigma).
\]</div>{% endraw %}
<p>The shift is the covariance with the log likelihood, not its standard deviation. If a statistic is asymptotically uncorrelated with the score in a particular direction, its Gaussian limit cannot detect that local direction at first order.</p>
<p>For instance, suppose the earlier expansion has {% raw %}<span class="math inline">\(\mathbb{E}_0\psi=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb{E}_0\|\psi\|^2&lt;\infty\)</span>{% endraw %}. Under the QMD alternatives, the joint CLT for {% raw %}<span class="math inline">\(\psi\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} gives</p>

{% raw %}<div class="math display">\[
T_n\xRightarrow[Q_{n,h}]{}
\mathcal{N}_k(Ch,V),\qquad
C=\mathbb{E}_0[\psi\ell^\top],\quad
V=\mathbb{E}_0[\psi\psi^\top].
\]</div>{% endraw %}
<p>Here contiguity transfers the {% raw %}<span class="math inline">\(o_P(1)\)</span>{% endraw %} remainder, and the third lemma shifts the leading term. In the scale-calibration example, {% raw %}<span class="math inline">\(\psi(x)=\ell(x)=x\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(C=V=1\)</span>{% endraw %} and the shift is exactly {% raw %}<span class="math inline">\(h\)</span>{% endraw %}. The same calculation underlies local power and the definition of <a href="{% post_url 2023-04-25-regular-estimators-limit-experiments-and-asymptotic-efficiency %}">regular estimators</a>.</p>
<p><span id="some-other-important-results"></span><span id="argmax-theorem"></span></p>
<h2 id="08-0-argmax-theorem">7. Separation of the maximizer</h2>
<p>Suppose an estimator is defined by maximizing {% raw %}<span class="math inline">\(M_n(h)\)</span>{% endraw %}. Knowing the limit of {% raw %}<span class="math inline">\(M_n(h)\)</span>{% endraw %} at each fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %} does not control an optimization over all {% raw %}<span class="math inline">\(h\)</span>{% endraw %}: the maximizer can seek out a location where the approximation is poor. The argmax theorem combines uniform control on compact sets with a condition preventing the maximizer from escaping those sets.</p>
<p>First consider a deterministic compact metric space {% raw %}<span class="math inline">\(K\)</span>{% endraw %}. Let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be upper semicontinuous and have a unique maximizer {% raw %}<span class="math inline">\(h^*\)</span>{% endraw %}. Upper semicontinuity means that {% raw %}<span class="math inline">\(h_j\to h\)</span>{% endraw %} implies {% raw %}<span class="math inline">\(\limsup_jM(h_j)\le M(h)\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, the closed set</p>

{% raw %}<div class="math display">\[
F_\varepsilon=\{h\in K:d(h,h^*)\ge\varepsilon\}
\]</div>{% endraw %}
<p>is compact. If nonempty, {% raw %}<span class="math inline">\(M\)</span>{% endraw %} attains its supremum there: take a maximizing sequence, extract a convergent subsequence, and use upper semicontinuity. Uniqueness therefore gives the strictly positive gap</p>

{% raw %}<div class="math display">\[
\gamma_\varepsilon
=M(h^*)-\sup_{F_\varepsilon}M&gt;0.
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\|M_n-M\|_K\le\delta\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M_n(\widehat h_n)\ge\sup_K M_n-r_n\)</span>{% endraw %}, then</p>

{% raw %}<div class="math display">\[
\begin{aligned}
M(h^*)-M(\widehat h_n)
&amp;=M(h^*)-M_n(h^*)
 +M_n(h^*)-M_n(\widehat h_n)
 +M_n(\widehat h_n)-M(\widehat h_n)\\
&amp;\le2\delta+r_n.
\end{aligned}
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(2\delta+r_n&lt;\gamma_\varepsilon\)</span>{% endraw %} forces {% raw %}<span class="math inline">\(d(\widehat h_n,h^*)&lt;\varepsilon\)</span>{% endraw %}. This gap argument explains the theorem. A random limiting objective requires a distributional version of it, and a noncompact space requires localization.</p>
<h2 id="08-0-argmax-general">8. Convergence of approximate maximizers</h2>
<div class="theorem" data-note-kind="Theorem" data-note-number="6" id="metric-argmax-theorem">
<p><strong>Theorem 6</strong>. Let {% raw %}<span class="math inline">\(H\)</span>{% endraw %} be a metric space and {% raw %}<span class="math inline">\(M_n,M\)</span>{% endraw %} real-valued stochastic processes on {% raw %}<span class="math inline">\(H\)</span>{% endraw %}. Assume the restrictions to compact sets are measurable random elements of {% raw %}<span class="math inline">\(\ell^\infty(K)\)</span>{% endraw %} and</p>

{% raw %}<div class="math display">\[
M_n|_K\Rightarrow M|_K
\quad\text{in the supremum norm for every compact }K\subset H.
\]</div>{% endraw %}
<p>Suppose that almost every path of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is upper semicontinuous and has a unique global maximizer {% raw %}<span class="math inline">\(h^*\)</span>{% endraw %}. Assume {% raw %}<span class="math inline">\(h^*\)</span>{% endraw %} is measurable and has a tight law. Let {% raw %}<span class="math inline">\(\widehat h_n\)</span>{% endraw %} be measurable {% raw %}<span class="math inline">\(H\)</span>{% endraw %}-valued random elements satisfying</p>

{% raw %}<div class="math display">\[
M_n(\widehat h_n)\ge\sup_{h\in H}M_n(h)-r_n,
\qquad r_n\ge0,\quad r_n\xrightarrow{P}0.
\]</div>{% endraw %}
<p>Assume also compact containment: for each {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %} there is a compact {% raw %}<span class="math inline">\(K_\eta\subset H\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\limsup_nP(\widehat h_n\notin K_\eta)&lt;\eta.
\]</div>{% endraw %}
<p>Then {% raw %}<span class="math inline">\(\widehat h_n\Rightarrow h^*\)</span>{% endraw %} in {% raw %}<span class="math inline">\(H\)</span>{% endraw %}.</p>
</div>
<p>Here {% raw %}<span class="math inline">\(\ell^\infty(K)\)</span>{% endraw %} consists of bounded functions on {% raw %}<span class="math inline">\(K\)</span>{% endraw %} with norm {% raw %}<span class="math inline">\(\|f\|_K=\sup_{h\in K}|f(h)|\)</span>{% endraw %}. Convergence in this space is stronger than convergence of finite-dimensional distributions. We state the measurable version so that every probability in the proof is an ordinary probability. The outer-probability extension used for nonmeasurable empirical processes requires the corresponding weak-convergence framework; the measurability hypotheses must be replaced by the corresponding outer-probability assumptions.</p>
<p>The proof is given in <a href="#contiguity-appendix-argmax">Appendix C</a>.</p>
<h3 id="08-0-what-breaks-if-the-assumptions-are-omitted">Counterexamples to weaker hypotheses</h3>
<p>Pointwise convergence can miss a moving spike even on a compact space. On {% raw %}<span class="math inline">\(H=[0,1]\)</span>{% endraw %}, let {% raw %}<span class="math inline">\(M(h)=-h^2\)</span>{% endraw %}, {% raw %}<span class="math inline">\(c_n=1/2+1/(n+2)\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
M_n(h)=-h^2+2\mathbf1_{\{h=c_n\}}.
\]</div>{% endraw %}
<p>For every fixed {% raw %}<span class="math inline">\(h\)</span>{% endraw %}, {% raw %}<span class="math inline">\(M_n(h)\to M(h)\)</span>{% endraw %}, since the distinct spike locations visit {% raw %}<span class="math inline">\(h\)</span>{% endraw %} at most once. Yet the maximizers {% raw %}<span class="math inline">\(c_n\)</span>{% endraw %} tend to {% raw %}<span class="math inline">\(1/2\)</span>{% endraw %}, while the unique maximizer of {% raw %}<span class="math inline">\(M\)</span>{% endraw %} is zero. The supremum-norm error is always two.</p>
<p>Uniform convergence on each compact also does not prevent escape. On {% raw %}<span class="math inline">\(H=\mathbb R\)</span>{% endraw %}, set</p>

{% raw %}<div class="math display">\[
M_n(h)=-h^2+(n^2+1)\mathbf1_{\{h=n\}}.
\]</div>{% endraw %}
<p>On every fixed compact set, the criterion eventually equals {% raw %}<span class="math inline">\(-h^2\)</span>{% endraw %}, but the global maximizer is {% raw %}<span class="math inline">\(n\)</span>{% endraw %}. Compact containment is therefore a separate assertion to prove, usually through a rate bound or a bound on the objective outside a large ball.</p>
<h2 id="08-0-argmax-applications">9. Consistency and local distributions</h2>
<p>For consistency, let {% raw %}<span class="math inline">\(M\)</span>{% endraw %} be deterministic with a well-separated maximizer {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
\gamma_\varepsilon\triangleq
M(\theta_0)-\sup_{d(\theta,\theta_0)\ge\varepsilon}M(\theta)&gt;0
\qquad(\varepsilon&gt;0).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(\|M_n-M\|_H=o_P(1)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(M_n(\widehat\theta_n)\ge M_n(\theta_0)-r_n\)</span>{% endraw %} with {% raw %}<span class="math inline">\(r_n=o_P(1)\)</span>{% endraw %} nonnegative, the deterministic gap calculation gives</p>

{% raw %}<div class="math display">\[
P(d(\widehat\theta_n,\theta_0)\ge\varepsilon)
\le P(2\|M_n-M\|_H+r_n\ge\gamma_\varepsilon)
\longrightarrow0.
\]</div>{% endraw %}
<p>Global separation supplies the positive gap in this consistency argument. Alternatively, local uniform convergence, upper semicontinuity, uniqueness, and compact containment give consistency through the argmax theorem. A constant distributional limit is also a probability limit: apply portmanteau to the closed set {% raw %}<span class="math inline">\(\{\theta:d(\theta,\theta_0)\ge\varepsilon\}\)</span>{% endraw %}.</p>

<p>For an empirical criterion {% raw %}<span class="math inline">\(M_n(\theta)=n^{-1}\sum_i m_\theta(X_i)\)</span>{% endraw %}, the stochastic part of this argument is a <a href="{% post_url 2022-07-02-uniform-laws-of-large-numbers-and-stochastic-equicontinuity %}">uniform law of large numbers</a>. Identification supplies the separation. These are separate pieces of an M-estimator consistency proof.</p>
<h3 id="08-0-complete-the-square-before-taking-the-argmax">Quadratic M-estimation</h3><p>Let {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} be interior to {% raw %}<span class="math inline">\(\Theta\subset\mathbb R^d\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\mathcal H_n=\sqrt n(\Theta-\theta_0)\)</span>{% endraw %}. Every fixed compact set is eventually contained in {% raw %}<span class="math inline">\(\mathcal H_n\)</span>{% endraw %}. Define the local criterion {% raw %}<span class="math display">\[
\mathcal M_n(h)=n\{M_n(\theta_0+h/\sqrt n)-M_n(\theta_0)\}.
\]</span>{% endraw %}</p>
<div class="proposition" id="quadratic-m-estimation">
<p><strong>Proposition (Quadratic M-estimation).</strong> Suppose, under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}, for each {% raw %}<span class="math inline">\(K&lt;\infty\)</span>{% endraw %}, {% raw %}<span class="math display">\[
e_{n,K}=\sup_{\|h\|\le K}\left|\mathcal M_n(h)-h^\top Z_n+\frac12h^\top Ah\right|=o_{P_n}(1),
\qquad Z_n\Rightarrow\mathcal{N}_d(0,B),
\]</span>{% endraw %} where {% raw %}<span class="math inline">\(A\)</span>{% endraw %} is symmetric positive definite and {% raw %}<span class="math inline">\(B\)</span>{% endraw %} is nonnegative definite. Suppose {% raw %}<span class="math inline">\(\widehat h_n=\sqrt n(\widehat\theta_n-\theta_0)=O_{P_n}(1)\)</span>{% endraw %} and {% raw %}<span class="math display">\[
\mathcal M_n(\widehat h_n)\ge\sup_{h\in\mathcal H_n}\mathcal M_n(h)-r_n,
\qquad r_n\ge0,\quad r_n=o_{P_n}(1).
\]</span>{% endraw %} Then {% raw %}<span class="math display">\[
\widehat h_n=A^{-1}Z_n+o_{P_n}(1)
\Rightarrow\mathcal{N}_d(0,A^{-1}BA^{-\top}).
\]</span>{% endraw %}</p>
</div>
<p><em>Proof.</em> Put {% raw %}<span class="math inline">\(h_n^0=A^{-1}Z_n\)</span>{% endraw %}. Completing the square gives {% raw %}<span class="math display">\[
h^\top Z_n-\frac12h^\top Ah
=\frac12Z_n^\top A^{-1}Z_n
-\frac12(h-h_n^0)^\top A(h-h_n^0).
\]</span>{% endraw %} Both {% raw %}<span class="math inline">\(h_n^0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widehat h_n\)</span>{% endraw %} are tight. On the event that both lie in the ball of radius {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, and for {% raw %}<span class="math inline">\(n\)</span>{% endraw %} large enough that this ball lies in {% raw %}<span class="math inline">\(\mathcal H_n\)</span>{% endraw %}, approximate maximization implies {% raw %}<span class="math display">\[
\frac{\lambda_{\min}(A)}2\|\widehat h_n-h_n^0\|^2\le2e_{n,K}+r_n.
\]</span>{% endraw %} For fixed {% raw %}<span class="math inline">\(K\)</span>{% endraw %} the right side vanishes. The probability of the complementary event becomes arbitrarily small as {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}. This proves the linear representation, and the CLT gives the stated covariance. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<p>The rate condition is part of this proposition. The counterexamples above show why compact-local approximation alone cannot supply it. In a smooth model it can instead be obtained from a score equation.</p>
<div class="lemma" id="smooth-score-linearization">
<p><strong>Lemma (A sufficient score condition).</strong> Suppose {% raw %}<span class="math inline">\(\widehat\theta_n\xrightarrow{P_n}\theta_0\)</span>{% endraw %} in {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probability, {% raw %}<span class="math inline">\(M_n\)</span>{% endraw %} is twice continuously differentiable on a convex neighborhood {% raw %}<span class="math inline">\(U\)</span>{% endraw %} of {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, and {% raw %}<span class="math display">\[
\sqrt n\nabla M_n(\theta_0)=Z_n=O_{P_n}(1),\qquad
\sqrt n\nabla M_n(\widehat\theta_n)=o_{P_n}(1).
\]</span>{% endraw %} Suppose {% raw %}<span class="math inline">\(\sup_{\theta\in U}\|\nabla^2M_n(\theta)+A(\theta)\|\xrightarrow{P_n}0\)</span>{% endraw %} in probability, where {% raw %}<span class="math inline">\(A(\theta)\)</span>{% endraw %} is continuous at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A(\theta_0)=A\)</span>{% endraw %} is positive definite. Then {% raw %}<span class="math inline">\(\widehat h_n=A^{-1}Z_n+o_{P_n}(1)\)</span>{% endraw %}, and the compact-uniform quadratic expansion in the proposition holds.</p>
</div>
<p><em>Proof.</em> With probability tending to one the segment from {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %} to {% raw %}<span class="math inline">\(\widehat\theta_n\)</span>{% endraw %} lies in {% raw %}<span class="math inline">\(U\)</span>{% endraw %}. Integrating the Hessian along that segment gives {% raw %}<span class="math display">\[
\sqrt n\nabla M_n(\widehat\theta_n)
=Z_n-\overline A_n\widehat h_n,
\qquad
\overline A_n=-\int_0^1\nabla^2M_n(\theta_0+t(\widehat\theta_n-\theta_0))\,dt\xrightarrow{P_n} A.
\]</span>{% endraw %} The inverse exists with probability tending to one and converges to {% raw %}<span class="math inline">\(A^{-1}\)</span>{% endraw %}. Solving the equation first proves tightness and then the representation. Taylor’s integral remainder on each ball {% raw %}<span class="math inline">\(\|h\|\le K\)</span>{% endraw %} proves the quadratic expansion, because the corresponding parameter ball shrinks to {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}. {% raw %}<span class="math inline">\(\square\)</span>{% endraw %}</p>
<h3 id="m-estimator-local-alternatives">Local alternatives and centering</h3>
<p>Suppose the observations follow a QMD model at {% raw %}<span class="math inline">\(\theta_0\)</span>{% endraw %}, with score {% raw %}<span class="math inline">\(\ell\)</span>{% endraw %} and information {% raw %}<span class="math inline">\(I\)</span>{% endraw %}, and {% raw %}<span class="math inline">\(Z_n=n^{-1/2}\sum_i\psi(X_i)\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(E_0\psi=0\)</span>{% endraw %} and {% raw %}<span class="math inline">\(E_0\|\psi\|^2&lt;\infty\)</span>{% endraw %}. Write {% raw %}<span class="math display">\[
B=E_0[\psi\psi^\top],\qquad C=E_0[\psi\ell^\top].
\]</span>{% endraw %} The joint CLT for {% raw %}<span class="math inline">\((\psi,\ell)\)</span>{% endraw %} and the third lemma give {% raw %}<span class="math inline">\(Z_n\Rightarrow\mathcal{N}_d(Ch,B)\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_{n,h}\)</span>{% endraw %}. Contiguity transfers the remainder in the linear representation. Consequently, {% raw %}<span class="math display">\[
\sqrt n(\widehat\theta_n-\theta_0)\Rightarrow\mathcal{N}_d(A^{-1}Ch,A^{-1}BA^{-\top}),
\]</span>{% endraw %} and centering at {% raw %}<span class="math inline">\(\theta_0+h/\sqrt n\)</span>{% endraw %} gives mean {% raw %}<span class="math inline">\((A^{-1}C-I_d)h\)</span>{% endraw %}. A zero centered mean for every {% raw %}<span class="math inline">\(h\)</span>{% endraw %} therefore requires {% raw %}<span class="math inline">\(C=A\)</span>{% endraw %} in this setting.</p>
<p>For a correctly specified likelihood with the preceding optimization or score conditions, {% raw %}<span class="math inline">\(\psi=\ell\)</span>{% endraw %} and {% raw %}<span class="math inline">\(A=B=C=I\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(I\)</span>{% endraw %} is positive definite, {% raw %}<span class="math display">\[
\sqrt n(\widehat\theta_n-\theta_0)=I^{-1}\Delta_n+o_{P_n}(1),\qquad
\sqrt n(\widehat\theta_n-\theta_0-h/\sqrt n)
\xRightarrow[Q_{n,h}]{}\mathcal{N}_d(0,I^{-1}).
\]</span>{% endraw %} The likelihood equalities are additional structure. For a general criterion, curvature and score covariance must be calculated separately.</p>
<h2 id="contiguity-appendix-first">Appendix A. Proof of Le Cam’s first lemma</h2><h3 id="08-0-proof-contiguity-and-uniform-integrability">Uniform integrability and singular mass</h3>
<p>Assume 1. Since {% raw %}<span class="math inline">\(P_n(p_n=0)=0\)</span>{% endraw %}, contiguity gives {% raw %}<span class="math inline">\(s_n\to0\)</span>{% endraw %}. If uniform integrability failed, there would be an {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, increasing indices {% raw %}<span class="math inline">\(n_k\)</span>{% endraw %}, and thresholds {% raw %}<span class="math inline">\(K_k\to\infty\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{P_{n_k}}[L_{n_k}\mathbf1_{\{L_{n_k}&gt;K_k\}}]
\ge\varepsilon.
\]</div>{% endraw %}
<p>The indices can be chosen increasing because each individual {% raw %}<span class="math inline">\(L_n\)</span>{% endraw %} is integrable. Markov’s inequality gives {% raw %}<span class="math inline">\(P_{n_k}(L_{n_k}&gt;K_k)\le1/K_k\)</span>{% endraw %}, whereas change of measure gives {% raw %}<span class="math inline">\(Q_{n_k}(L_{n_k}&gt;K_k)\ge\varepsilon\)</span>{% endraw %}. Taking empty events off this subsequence contradicts contiguity. Thus 1 implies 2.</p>
<p>Conversely, split a sample event according to whether {% raw %}<span class="math inline">\(L_n\le K\)</span>{% endraw %}:</p>

{% raw %}<div class="math display">\[
Q_n(A_n)\le s_n+K P_n(A_n)
  +\mathbb{E}_{P_n}[L_n\mathbf1_{\{L_n&gt;K\}}].
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(P_n(A_n)\to0\)</span>{% endraw %}, first let {% raw %}<span class="math inline">\(n\to\infty\)</span>{% endraw %} with {% raw %}<span class="math inline">\(K\)</span>{% endraw %} fixed, then let {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %}. Statement 2 makes the right side vanish, proving 1.</p>
<h3 id="08-0-proof-why-the-limiting-expectation-must-be-one">Expectation of the limiting likelihood ratio</h3>
<p>The ratios are tight under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %} because {% raw %}<span class="math inline">\(P_n(L_n&gt;K)\le1/K\)</span>{% endraw %}. Suppose along some subsequence {% raw %}<span class="math inline">\(L_n\Rightarrow L\)</span>{% endraw %}. For each fixed {% raw %}<span class="math inline">\(K\)</span>{% endraw %}, the bounded continuous truncation gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}_{P_n}(L_n\wedge K)\to\mathbb{E}(L\wedge K).
\]</div>{% endraw %}
<p>Under 2, the omitted tails vanish uniformly and {% raw %}<span class="math inline">\(\mathbb{E}_{P_n}L_n=1-s_n\to1\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(K\to\infty\)</span>{% endraw %} therefore yields {% raw %}<span class="math inline">\(\mathbb{E}L=1\)</span>{% endraw %}. This proves 2 implies 3.</p>
<p>For the converse, first show {% raw %}<span class="math inline">\(s_n\to0\)</span>{% endraw %}. Otherwise some subsequence has {% raw %}<span class="math inline">\(s_n\ge\varepsilon\)</span>{% endraw %}. Tightness supplies a further weakly convergent subsequence, and truncation implies</p>

{% raw %}<div class="math display">\[
\mathbb{E}L\le\liminf_n\mathbb{E}_{P_n}L_n\le1-\varepsilon,
\]</div>{% endraw %}
<p>contrary to 3. Thus all the means tend to one. Along any weakly convergent subsequence, 3 and the truncation identity now give</p>

{% raw %}<div class="math display">\[
\lim_n\mathbb{E}_{P_n}(L_n-K)_+
=1-\mathbb{E}(L\wedge K)\longrightarrow0
\quad\text{as }K\to\infty.
\]</div>{% endraw %}
<p>Since {% raw %}<span class="math inline">\(x\mathbf1_{\{x&gt;2K\}}\le2(x-K)_+\)</span>{% endraw %} for {% raw %}<span class="math inline">\(x\ge0\)</span>{% endraw %}, this implies uniform integrability along that subsequence; its finitely many initial terms cause no problem. If the entire sequence were not uniformly integrable, we could choose offending indices and thresholds as in the preceding proof and then extract a weakly convergent subsequence. It would still have the offending tails, contradicting what we just proved. Hence 3 implies 2.</p>
<p>For a concrete failure, let {% raw %}<span class="math inline">\(P_n(\{1\})=1/n\)</span>{% endraw %} on {% raw %}<span class="math inline">\(\{0,1\}\)</span>{% endraw %} and let {% raw %}<span class="math inline">\(Q_n=\delta_1\)</span>{% endraw %}. Then {% raw %}<span class="math inline">\(L_n=n\mathbf1_{\{1\}}\)</span>{% endraw %} has expectation one for every {% raw %}<span class="math inline">\(n\)</span>{% endraw %}, but converges to zero in {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probability. All the likelihood mass sits on an event whose reference probability vanishes. Expectations equal to one before taking limits are therefore not enough.</p>
<h3 id="08-0-proof-the-reverse-ratio-and-negligible-statistics">The reverse ratio and negligible statistics</h3>
<p>Assume 1 and let {% raw %}<span class="math inline">\(R_n\Rightarrow R\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %} along a subsequence. Given {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, use asymptotic uniform absolute continuity to choose {% raw %}<span class="math inline">\(\delta&gt;0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(0&lt;t&lt;\delta\)</span>{% endraw %}, the event</p>

{% raw %}<div class="math display">\[
B_n(t)=\{q_n&gt;0,\ R_n&lt;t\}
\]</div>{% endraw %}
<p>has {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}-probability at most {% raw %}<span class="math inline">\(t\)</span>{% endraw %}, because {% raw %}<span class="math inline">\(p_n&lt;tq_n\)</span>{% endraw %} there. Thus {% raw %}<span class="math inline">\(Q_n(R_n&lt;t)=Q_n(B_n(t))&lt;\varepsilon\)</span>{% endraw %} eventually. The open-set part of the portmanteau theorem gives {% raw %}<span class="math inline">\(P(R&lt;t)\le\varepsilon\)</span>{% endraw %}, so {% raw %}<span class="math inline">\(P(R=0)=0\)</span>{% endraw %}. This proves 4.</p>
<p>Conversely, suppose 4 holds and {% raw %}<span class="math inline">\(P_n(A_n)\to0\)</span>{% endraw %}. If {% raw %}<span class="math inline">\(Q_n(A_n)\)</span>{% endraw %} failed to vanish, choose a subsequence bounded away from zero. Since {% raw %}<span class="math inline">\(\mathbb{E}_{Q_n}R_n\le1\)</span>{% endraw %}, extract a further subsequence with {% raw %}<span class="math inline">\(R_n\Rightarrow R\)</span>{% endraw %} under {% raw %}<span class="math inline">\(Q_n\)</span>{% endraw %}. For every {% raw %}<span class="math inline">\(t&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
Q_n(A_n)
\le Q_n(R_n\le t)
 +\frac1t\mathbb{E}_{Q_n}[R_n\mathbf1_{A_n}]
\le Q_n(R_n\le t)+\frac{P_n(A_n)}t.
\]</div>{% endraw %}
<p>The closed-set inequality bounds the limit superior by {% raw %}<span class="math inline">\(P(R\le t)\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(t\downarrow0\)</span>{% endraw %} makes this zero by 4, a contradiction.</p>
<p>Finally, 1 implies 5 by applying contiguity to {% raw %}<span class="math inline">\(\{|T_n|&gt;\varepsilon\}\)</span>{% endraw %} for each {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. Taking {% raw %}<span class="math inline">\(T_n=\mathbf1_{A_n}\)</span>{% endraw %} proves the converse. The same argument applies to norms of vector-valued remainders. This completes all the equivalences.</p>
<p><span id="result-10"></span></p>
<h2 id="contiguity-appendix-second">Appendix B. Proof of the square-root likelihood lemma</h2><h3 id="08-0-proof-normalization-determines-the-first-drift-term">Normalization and centering</h3>
<p>All expectations in this proof are under {% raw %}<span class="math inline">\(P_n\)</span>{% endraw %}. The definition gives</p>

{% raw %}<div class="math display">\[
\mathbb{E}(1+T_{ni}/2)^2=1-s_{ni},
\qquad
\mathbb{E}T_{ni}=-\frac14\mathbb{E}T_{ni}^2-s_{ni}.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(\sum_i\mathbb{E}T_{ni}\to-\sigma^2/4\)</span>{% endraw %}. We also need the variance of the centered sum. For any {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\max_i\mathbb{E}T_{ni}^2
\le\varepsilon^2+
\sum_i\mathbb{E}[T_{ni}^2\mathbf1_{\{|T_{ni}|&gt;\varepsilon\}}].
\]</div>{% endraw %}
<p>Taking the limit superior and then {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} shows that the largest second moment vanishes. Since {% raw %}<span class="math inline">\(\max_i s_{ni}\le\sum_i s_{ni}\to0\)</span>{% endraw %}, the largest absolute mean vanishes as well. Moreover,</p>

{% raw %}<div class="math display">\[
\sum_i(\mathbb{E}T_{ni})^2
\le\max_i|\mathbb{E}T_{ni}|\sum_i|\mathbb{E}T_{ni}|
\longrightarrow0.
\]</div>{% endraw %}
<p>The last sum is bounded by the normalization identity. Therefore {% raw %}<span class="math inline">\(\sum_i\operatorname{Var}(T_{ni})\to\sigma^2\)</span>{% endraw %}. The centered variables satisfy Lindeberg’s condition: eventually their mean shifts are smaller than {% raw %}<span class="math inline">\(\varepsilon/2\)</span>{% endraw %}, and</p>

{% raw %}<div class="math display">\[
\begin{aligned}
&amp;\sum_i\mathbb{E}\bigl[(T_{ni}-\mathbb{E}T_{ni})^2
 \mathbf1_{\{|T_{ni}-\mathbb{E}T_{ni}|&gt;\varepsilon\}}\bigr]\\
&amp;\quad\le2\sum_i\mathbb{E}[T_{ni}^2\mathbf1_{\{|T_{ni}|&gt;\varepsilon/2\}}]
  +2\sum_i(\mathbb{E}T_{ni})^2\longrightarrow0.
\end{aligned}
\]</div>{% endraw %}
<p>The <a href="{% post_url 2022-03-25-central-limit-theorems-and-worked-examples %}">triangular-array CLT</a> now gives the stated limit of {% raw %}<span class="math inline">\(W_n\)</span>{% endraw %}. When {% raw %}<span class="math inline">\(\sigma^2=0\)</span>{% endraw %}, the same conclusion follows directly from Chebyshev’s inequality.</p>
<h3 id="08-0-proof-the-quadratic-sum-is-stable-and-the-largest-increment-vanishes">The quadratic sum and maximal increment</h3>
<p>For fixed {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}, truncate the squares at {% raw %}<span class="math inline">\(\varepsilon\)</span>{% endraw %}. Independence gives</p>

{% raw %}<div class="math display">\[
\operatorname{Var}\left(\sum_iT_{ni}^2
 \mathbf1_{\{|T_{ni}|\le\varepsilon\}}\right)
\le\varepsilon^2\sum_i\mathbb{E}T_{ni}^2.
\]</div>{% endraw %}
<p>The expected discarded sum tends to zero by Lindeberg’s condition. Thus, for any {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}, Chebyshev and Markov bound the limit superior of {% raw %}<span class="math inline">\(P(|\sum_iT_{ni}^2-\sigma^2|&gt;\eta)\)</span>{% endraw %} by a constant times {% raw %}<span class="math inline">\(\varepsilon^2\sigma^2/\eta^2\)</span>{% endraw %}. Letting {% raw %}<span class="math inline">\(\varepsilon\downarrow0\)</span>{% endraw %} proves</p>

{% raw %}<div class="math display">\[
\sum_iT_{ni}^2\xrightarrow{P_n}\sigma^2.
\]</div>{% endraw %}
<p>Also, by a union bound,</p>

{% raw %}<div class="math display">\[
P_n\left(\max_i|T_{ni}|&gt;\varepsilon\right)
\le\frac1{\varepsilon^2}
 \sum_i\mathbb{E}[T_{ni}^2\mathbf1_{\{|T_{ni}|&gt;\varepsilon\}}]
\longrightarrow0.
\]</div>{% endraw %}
<p>Both estimates are needed for the logarithm expansion: the sum of squares supplies the quadratic drift, while the maximum bound puts every increment in a common Taylor neighborhood.</p>
<h3 id="08-0-proof-the-logarithm-supplies-the-second-drift-term">The logarithmic remainder</h3>
<p>For {% raw %}<span class="math inline">\(|t|\le1\)</span>{% endraw %}, Taylor’s formula gives</p>

{% raw %}<div class="math display">\[
2\log(1+t/2)=t-\frac{t^2}{4}+r(t),
\qquad |r(t)|\le C|t|^3.
\]</div>{% endraw %}
<p>With probability tending to one all the {% raw %}<span class="math inline">\(T_{ni}\)</span>{% endraw %} lie in this range. On that event,</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\log L_n
&amp;=2\sum_i\log(1+T_{ni}/2)\\
&amp;=W_n-\frac14\sum_iT_{ni}^2+\sum_i r(T_{ni}),\\
\left|\sum_i r(T_{ni})\right|
&amp;\le C\max_i|T_{ni}|\sum_iT_{ni}^2=o_{P_n}(1).
\end{aligned}
\]</div>{% endraw %}
<p>In particular, zeros of the likelihood ratio cause no difficulty on this event. The quadratic term contributes another {% raw %}<span class="math inline">\(-\sigma^2/4\)</span>{% endraw %}, giving the total drift {% raw %}<span class="math inline">\(-\sigma^2/2\)</span>{% endraw %}. The first lemma’s lognormal criterion completes the proof.</p>
<h2 id="contiguity-appendix-argmax">Appendix C. Proof of the metric-space argmax theorem</h2><h3 id="08-0-proof-step-1-localize-both-maximizers">Compact localization</h3>
<p>Fix a closed set {% raw %}<span class="math inline">\(F\subset H\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\eta&gt;0\)</span>{% endraw %}. Compact containment gives a compact set controlling {% raw %}<span class="math inline">\(\widehat h_n\)</span>{% endraw %}; tightness gives another controlling {% raw %}<span class="math inline">\(h^*\)</span>{% endraw %}. Their union is compact, so there is a single nonempty compact {% raw %}<span class="math inline">\(K\)</span>{% endraw %} such that</p>

{% raw %}<div class="math display">\[
\limsup_nP(\widehat h_n\notin K)&lt;\eta,
\qquad P(h^*\notin K)&lt;\eta.
\]</div>{% endraw %}
<p>It is enough to control {% raw %}<span class="math inline">\(P(\widehat h_n\in F\cap K)\)</span>{% endraw %}, because</p>

{% raw %}<div class="math display">\[
P(\widehat h_n\in F)
\le P(\widehat h_n\in F\cap K)+P(\widehat h_n\notin K).
\]</div>{% endraw %}
<p>If {% raw %}<span class="math inline">\(F\cap K\)</span>{% endraw %} is empty, its probability is zero and the desired bound follows immediately. In the rest of the proof assume it is nonempty.</p>
<h3 id="08-0-proof-step-2-compare-suprema-through-a-continuous-map">Continuity of the supremum difference</h3>
<p>For any nonempty subset {% raw %}<span class="math inline">\(A\subset K\)</span>{% endraw %} and bounded functions {% raw %}<span class="math inline">\(f,g\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\left|\sup_A f-\sup_A g\right|\le\|f-g\|_K.
\]</div>{% endraw %}
<p>Indeed {% raw %}<span class="math inline">\(f(h)\le g(h)+\|f-g\|_K\)</span>{% endraw %} for every {% raw %}<span class="math inline">\(h\in A\)</span>{% endraw %}; take suprema, then interchange {% raw %}<span class="math inline">\(f\)</span>{% endraw %} and {% raw %}<span class="math inline">\(g\)</span>{% endraw %}. Therefore</p>

{% raw %}<div class="math display">\[
D(f)\triangleq\sup_{F\cap K}f-\sup_K f
\]</div>{% endraw %}
<p>is a {% raw %}<span class="math inline">\(2\)</span>{% endraw %}-Lipschitz real-valued function on {% raw %}<span class="math inline">\(\ell^\infty(K)\)</span>{% endraw %}. The continuous mapping theorem yields</p>

{% raw %}<div class="math display">\[
D_n\triangleq D(M_n|_K)\Rightarrow D(M|_K)\triangleq D.
\]</div>{% endraw %}
<p>Only the two supremum functionals enter this step; continuity of the argmax map or of the paths of {% raw %}<span class="math inline">\(M_n\)</span>{% endraw %} is not required. We apply the continuous mapping theorem to those suprema.</p>
<h3 id="08-0-proof-step-3-use-approximate-maximization-with-a-random-error">The optimization error</h3>
<p>On {% raw %}<span class="math inline">\(\{\widehat h_n\in F\cap K\}\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\sup_{F\cap K}M_n
\ge M_n(\widehat h_n)
\ge\sup_H M_n-r_n
\ge\sup_K M_n-r_n.
\]</div>{% endraw %}
<p>Thus {% raw %}<span class="math inline">\(D_n\ge-r_n\)</span>{% endraw %} on that event. For every fixed {% raw %}<span class="math inline">\(a&gt;0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[
\begin{aligned}
\limsup_nP(\widehat h_n\in F\cap K)
&amp;\le\limsup_nP(D_n\ge-a)
 +\limsup_nP(r_n&gt;a)\\
&amp;\le P(D\ge-a).
\end{aligned}
\]</div>{% endraw %}
<p>The last line uses the portmanteau inequality for the closed interval {% raw %}<span class="math inline">\([-a,\infty)\)</span>{% endraw %} and {% raw %}<span class="math inline">\(r_n\xrightarrow{P}0\)</span>{% endraw %} in probability. Now let {% raw %}<span class="math inline">\(a\downarrow0\)</span>{% endraw %}. Continuity of probabilities along decreasing events gives the upper bound {% raw %}<span class="math inline">\(P(D\ge0)\)</span>{% endraw %}.</p>
<p><em>Remark.</em> In this step of the proof of <a href="#metric-argmax-theorem">Theorem 6</a>, no assumption is made about whether {% raw %}<span class="math inline">\(D\)</span>{% endraw %} has an atom at zero. The upper bound uses a closed event.</p>
<h3 id="08-0-proof-step-4-uniqueness-makes-the-limiting-gap-strict">Uniqueness and the closed-set bound</h3>
<p>On the event {% raw %}<span class="math inline">\(\{h^*\in K\setminus F\}\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\sup_K M=M(h^*)\)</span>{% endraw %}. Since {% raw %}<span class="math inline">\(F\cap K\)</span>{% endraw %} is compact and the limiting path is upper semicontinuous, it attains its maximum on {% raw %}<span class="math inline">\(F\cap K\)</span>{% endraw %}. That maximum is strictly below {% raw %}<span class="math inline">\(M(h^*)\)</span>{% endraw %} by uniqueness. Hence {% raw %}<span class="math inline">\(D&lt;0\)</span>{% endraw %} on this event, and</p>

{% raw %}<div class="math display">\[
\{D\ge0\}\subset\{h^*\in F\}\cup\{h^*\notin K\}
\quad\text{up to the null set of exceptional paths}.
\]</div>{% endraw %}
<p>Combining all four steps,</p>

{% raw %}<div class="math display">\[
\limsup_nP(\widehat h_n\in F)
\le P(h^*\in F)+P(h^*\notin K)
 +\limsup_nP(\widehat h_n\notin K)
\le P(h^*\in F)+2\eta.
\]</div>{% endraw %}
<p>Let {% raw %}<span class="math inline">\(\eta\downarrow0\)</span>{% endraw %}. The inequality holds for every closed {% raw %}<span class="math inline">\(F\)</span>{% endraw %}, so the portmanteau theorem proves {% raw %}<span class="math inline">\(\widehat h_n\Rightarrow h^*\)</span>{% endraw %}. The closed-set argument proves the metric-space argmax theorem (<a href="#metric-argmax-theorem">Theorem 6</a>), including the localization step.</p>
<h2 id="08-0-sources-and-further-reading">Sources</h2>
<p>The first and third lemmas and their likelihood-ratio interpretation are treated in <span class="citation" data-cites="van_der_vaart1998asymptotic">(<a href="#ref-van_der_vaart1998asymptotic" role="doc-biblioref">A. W. van der Vaart 1998, vol. 3, chap. 6</a>)</span>; the QMD-to-LAN result is in Chapter 7. The metric-space argmax theorem is Theorem 3.2.2 of <span class="citation" data-cites="van_der_vaart_weak_2000">(<a href="#ref-van_der_vaart_weak_2000" role="doc-biblioref">Aad W. van der Vaart and Wellner 2000</a>)</span>. The proofs here spell out the truncation, singular-mass, and compact-localization steps in the conventions used throughout these notes.</p>
<p>Online author sources are <a href="https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch3-rev4b.pdf#page=27">Wellner’s lower-bounds notes, Section 3</a> and his <a href="https://sites.stat.washington.edu/jaw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf#page=96">Delft empirical-process notes, corrected June 1, 2005, Chapter 2, Section 2</a>. The latter gives the compact-set argument behind the argmax theorem. The <a href="{% post_url 2021-12-18-weak-convergence-tightness-and-metric-spaces %}">weak-convergence note</a> supplies the portmanteau and continuous-mapping results used above.</p>
<div class="references csl-bib-body hanging-indent" data-entry-spacing="0" id="refs" role="list">
<div class="csl-entry" id="ref-van_der_vaart1998asymptotic" role="listitem">
Vaart, A. W. van der. 1998. <em>Asymptotic Statistics</em>. Vol. 3. Cambridge Series in Statistical and Probabilistic Mathematics. Cambridge University Press, Cambridge. <a href="https://doi.org/10.1017/CBO9780511802256">https://doi.org/10.1017/CBO9780511802256</a>.
</div>
<div class="csl-entry" id="ref-van_der_vaart_weak_2000" role="listitem">
Vaart, Aad W. van der, and Jon A. Wellner. 2000. <em>Weak Convergence and Empirical Processes: With Applications to Statistics</em>. Corr. 2. printing. Springer Series in Statistics. New York Berlin Heidelberg: Springer.
</div>
</div>
</div>
