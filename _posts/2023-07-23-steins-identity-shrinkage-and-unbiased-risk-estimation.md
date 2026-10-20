---
layout: "post"
title: "Stein’s Identity, Shrinkage, and Unbiased Risk Estimation"
date: "2023-07-23"
tags: ["statistics", "nonparametric estimation"]
excerpt: "Stein’s Identity, Shrinkage, and Unbiased Risk Estimation. Notes on nonparametric efficiency."
note_series: "Nonparametric efficiency"
note_source: "assets/notes/Overleaf Projects (32 items)/Notes on Asympotic Efficiency of Nonparametric Estimators/stats.tex"
redirect_from: ["/2023/05/11/steins-identity-shrinkage-and-unbiased-risk-estimation/", "/2023/05/11/steins-lemma-and-the-jamesstein-estimator/", "/2023/06/10/unbiased-estimation-of-risk/"]
---

<div class="note-content" markdown="0">

<p>Estimating each coordinate of a Gaussian mean by the corresponding observation seems natural under squared error. In dimension at least three, however, shrinking the vector toward the origin can reduce total risk. Stein’s identity makes the comparison explicit: it replaces an unknown covariance term by a derivative. The same calculation leads to an unbiased estimate of risk and to the problem of choosing shrinkage weights.</p>

<p>The Gaussian sequence model observes {% raw %}<span class="math inline">\(Y_i=\theta_i+\sigma\varepsilon_i\)</span>{% endraw %}, with independent standard normal errors. The loss is squared error. For the infinite-dimensional problem, summability and the parameter class matter; see the <a href="{% post_url 2023-07-17-the-gaussian-sequence-model-and-pinskers-theorem %}">sequence-model setup</a>.</p>

<div id="steins-paradox" data-note-section="title">

</div>
<p>We say an estimator {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} of a parameter {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} of a statistical model is <em>inadmissible</em> on {% raw %}<span class="math inline">\(\Theta \subset \mathbb R^d\)</span>{% endraw %} with respect to the squared risk if there exists another estimator {% raw %}<span class="math inline">\(\hat \theta\)</span>{% endraw %} such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}_\theta \|\hat \theta - \theta\|^2 \leq \mathbb{E}_\theta \|\theta^* - \theta\|^2 \quad \forall \theta \in \Theta ~.
\end{aligned}\]</div>{% endraw %}
<p> Furthermore, there exists some {% raw %}<span class="math inline">\(\theta_0 \in \Theta\)</span>{% endraw %} such that </p>

{% raw %}<div class="math display">\[\begin{aligned}
    \mathbb{E}_{\theta_0} \|\hat \theta - \theta_0\|^2 &lt; \mathbb{E}_{\theta_0} \|\theta^* - \theta_0\|^2 ~.
\end{aligned}\]</div>{% endraw %}
<p> Otherwise, we say the estimator {% raw %}<span class="math inline">\(\theta^*\)</span>{% endraw %} is <em>admissible</em>. Stein’s result shows that admissibility depends on the joint estimation problem: in the statistical model consisting of random vectors {% raw %}<span class="math inline">\(X_1, \dots, X_n\)</span>{% endraw %} where {% raw %}<span class="math inline">\(X_i = \theta + \eta_i\)</span>{% endraw %} for {% raw %}<span class="math inline">\(1 \leq i \leq n\)</span>{% endraw %}, where {% raw %}<span class="math inline">\(\theta \in \mathbb R^d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\eta_i \overset{\rm i.i.d}{\sim} \mathcal{N}(0,I_d)\)</span>{% endraw %}, then estimating {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} using the sample mean {% raw %}<span class="math inline">\(\overline X = \frac1n \sum_{1 \leq i \leq n} X_i\)</span>{% endraw %} when {% raw %}<span class="math inline">\(d \geq 3\)</span>{% endraw %} fails to be admissible: {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} is <em>inadmissible</em>. Stein further proposed an estimator for {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} in this context, for which the risk is smaller than that of {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} <em>everywhere</em> on {% raw %}<span class="math inline">\(\mathbb R^d\)</span>{% endraw %} if {% raw %}<span class="math inline">\(d \geq 3\)</span>{% endraw %}. This estimator, as we will see, is based on a shrinkage of {% raw %}<span class="math inline">\(\overline X\)</span>{% endraw %} toward the origin with a shrinkage factor that <em>depends on {% raw %}<span class="math inline">\(\|\overline X\|\)</span>{% endraw %}</em>. This example motivates a closer examination of risk improvement in higher-dimensional models.</p>

<h3 data-note-section="1" id="steins-lemma">1. Stein’s Lemma</h3><p>Let {% raw %}<span class="math inline">\(Y\sim N_d(\theta,\varepsilon^2I_d)\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\varepsilon&gt;0\)</span>{% endraw %}. Suppose {% raw %}<span class="math inline">\(f\)</span>{% endraw %} is absolutely continuous on compact intervals in each coordinate for almost every fixed value of the others. A convenient sufficient integrability condition is {% raw %}<span class="math inline">\(\mathbb E_\theta f(Y)^2&lt;\infty\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\mathbb E_\theta|\partial_i f(Y)|&lt;\infty\)</span>{% endraw %}. Then</p>

{% raw %}<div class="math display">\[\mathbb E_\theta[(Y_i-\theta_i)f(Y)]=\varepsilon^2\mathbb E_\theta[\partial_i f(Y)].\]</div>{% endraw %}

<p>Here is a proof that justifies the boundary terms. First take {% raw %}<span class="math inline">\(\theta=0\)</span>{% endraw %}, {% raw %}<span class="math inline">\(\varepsilon=1\)</span>{% endraw %}, and let {% raw %}<span class="math inline">\(\chi_R\)</span>{% endraw %} be a smooth function of the {% raw %}<span class="math inline">\(i\)</span>{% endraw %}-th coordinate equal to one on {% raw %}<span class="math inline">\([-R,R]\)</span>{% endraw %}, zero outside {% raw %}<span class="math inline">\([-2R,2R]\)</span>{% endraw %}, bounded between zero and one, with {% raw %}<span class="math inline">\(|\chi_R'|\le C/R\)</span>{% endraw %}. Integration by parts in that coordinate, followed by Fubini, gives</p>

{% raw %}<div class="math display">\[\mathbb E[Y_i f(Y)\chi_R(Y_i)]=\mathbb E[\partial_i f(Y)\chi_R(Y_i)]+\mathbb E[f(Y)\chi_R'(Y_i)].\]</div>{% endraw %}

<p>The Gaussian density has derivative {% raw %}<span class="math inline">\(-y_i\)</span>{% endraw %} times itself, and the cutoff removes boundary terms. The left side is dominated by {% raw %}<span class="math inline">\(|Y_i f(Y)|\)</span>{% endraw %}, which is integrable by Cauchy–Schwarz. The first right-hand term converges by dominated convergence; the absolute value of the last is at most {% raw %}<span class="math inline">\((C/R)\mathbb E|f(Y)|\to0\)</span>{% endraw %}. This proves the standard-normal identity.</p>

<p>For the general case put {% raw %}<span class="math inline">\(Z=(Y-\theta)/\varepsilon\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\widetilde f(z)=f(\theta+\varepsilon z)\)</span>{% endraw %}. The chain rule is {% raw %}<span class="math inline">\(\partial_i\widetilde f(z)=\varepsilon(\partial_i f)(\theta+\varepsilon z)\)</span>{% endraw %}. Thus {% raw %}<span class="math inline">\(\mathbb E[(Y_i-\theta_i)f(Y)]=\varepsilon\mathbb E[Z_i\widetilde f(Z)]=\varepsilon^2\mathbb E[\partial_i f(Y)]\)</span>{% endraw %}, as claimed. This sufficient version is all that the risk calculations below require. ◻</p>
<h3 data-note-section="2" id="the-case-of-d-geq-3">2. The Case of {% raw %}<span class="math inline">\(d \geq 3\)</span>{% endraw %}</h3><p>For every {% raw %}<span class="math inline">\(\theta\in\mathbb R^d\)</span>{% endraw %} and {% raw %}<span class="math inline">\(d\ge3\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[0&lt;\mathbb E_\theta\|Y\|^{-2}&lt;\infty.\]</div>{% endraw %}

<p>The Gaussian density is bounded by {% raw %}<span class="math inline">\((2\pi\varepsilon^2)^{-d/2}\)</span>{% endraw %}. On the unit ball the expectation is therefore bounded by a constant times {% raw %}<span class="math inline">\(\int_0^1r^{d-3}dr\)</span>{% endraw %}, which is finite exactly when {% raw %}<span class="math inline">\(d&gt;2\)</span>{% endraw %}. Outside the ball, {% raw %}<span class="math inline">\(\|Y\|^{-2}\le1\)</span>{% endraw %}. Positivity follows because {% raw %}<span class="math inline">\(Y\ne0\)</span>{% endraw %} almost surely. This separates the local singularity from the harmless tail; a bound with a positive quadratic exponential would instead diverge.</p>

<p>Rotational invariance also shows this expectation depends on {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %} only through {% raw %}<span class="math inline">\(\|\theta\|\)</span>{% endraw %}: for an orthogonal {% raw %}<span class="math inline">\(U\)</span>{% endraw %}, {% raw %}<span class="math inline">\(U(Y-\theta)\)</span>{% endraw %} has the same centered Gaussian law and {% raw %}<span class="math inline">\(\|UY\|=\|Y\|\)</span>{% endraw %}. At {% raw %}<span class="math inline">\(\theta=0\)</span>{% endraw %}, radial integration gives {% raw %}<span class="math inline">\(\mathbb E\|Y\|^{-2}=1/[\varepsilon^2(d-2)]\)</span>{% endraw %}, since integration by parts relates {% raw %}<span class="math inline">\(\int_0^\infty r^{d-1}e^{-r^2/2}dr\)</span>{% endraw %} to {% raw %}<span class="math inline">\((d-2)\int_0^\infty r^{d-3}e^{-r^2/2}dr\)</span>{% endraw %}.</p>
<h3 data-note-section="3" id="steins-theorem">3. Stein’s Theorem</h3><p>Write an estimator as {% raw %}<span class="math inline">\(\widehat\theta=Y+h(Y)\)</span>{% endraw %}. Assume each {% raw %}<span class="math inline">\(h_i\)</span>{% endraw %} satisfies Stein's lemma and {% raw %}<span class="math inline">\(\mathbb E\|h(Y)\|^2&lt;\infty\)</span>{% endraw %}. Expanding the square and applying the identity coordinatewise gives</p>

{% raw %}<div class="math display">\[\mathbb E_\theta\|\widehat\theta-\theta\|^2=d\varepsilon^2+\mathbb E_\theta\{\|h(Y)\|^2+2\varepsilon^2\operatorname{div}h(Y)\}.\]</div>{% endraw %}

<p>The term {% raw %}<span class="math inline">\(d\varepsilon^2\)</span>{% endraw %} is the risk of the unshrunk observation {% raw %}<span class="math inline">\(Y\)</span>{% endraw %}. Consequently the expression inside the following display is Stein's unbiased risk estimate:</p>

{% raw %}<div class="math display">\[\operatorname{SURE}(Y)=d\varepsilon^2+\|h(Y)\|^2+2\varepsilon^2\operatorname{div}h(Y).\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(\widehat\theta=g(Y)Y\)</span>{% endraw %}, use {% raw %}<span class="math inline">\(h_i=(g-1)Y_i\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\operatorname{div}h=d(g-1)+\sum_iY_i\partial_i g\)</span>{% endraw %}. This yields</p>

{% raw %}<div class="math display">\[\operatorname{SURE}(Y)=\varepsilon^2d(2g(Y)-1)+2\varepsilon^2\sum_iY_i\partial_i g(Y)+\|Y\|^2(1-g(Y))^2.\]</div>{% endraw %}

<p>To prove the James–Stein improvement, take {% raw %}<span class="math inline">\(h_i(y)=-ay_i/\|y\|^2\)</span>{% endraw %}, assigning any value at the null-probability point {% raw %}<span class="math inline">\(y=0\)</span>{% endraw %}. For {% raw %}<span class="math inline">\(y\ne0\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[\|h(y)\|^2=a^2/\|y\|^2,\qquad \partial_i h_i=-a/\|y\|^2+2ay_i^2/\|y\|^4,\qquad \operatorname{div}h=-a(d-2)/\|y\|^2.\]</div>{% endraw %}

<p>Each coordinate slice is smooth unless all other coordinates are zero, a Lebesgue-null set of slices. Moreover {% raw %}<span class="math inline">\(|\partial_i h_i|\le3|a|/\|y\|^2\)</span>{% endraw %} and {% raw %}<span class="math inline">\(\|h\|^2=a^2/\|y\|^2\)</span>{% endraw %}; the previous section verifies the required integrability. Thus for {% raw %}<span class="math inline">\(d\ge3\)</span>{% endraw %},</p>

{% raw %}<div class="math display">\[R_\theta(\widehat\theta_a)=d\varepsilon^2+\{a^2-2a\varepsilon^2(d-2)\}\mathbb E_\theta\|Y\|^{-2}.\]</div>{% endraw %}

<p>Every {% raw %}<span class="math inline">\(0&lt;a&lt;2\varepsilon^2(d-2)\)</span>{% endraw %} strictly improves on {% raw %}<span class="math inline">\(Y\)</span>{% endraw %} at every {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}. The coefficient is minimized at {% raw %}<span class="math inline">\(a=\varepsilon^2(d-2)\)</span>{% endraw %}, giving</p>

{% raw %}<div class="math display">\[\widehat\theta_{\rm JS}=\left(1-\frac{(d-2)\varepsilon^2}{\|Y\|^2}\right)Y,\qquad R_\theta(\widehat\theta_{\rm JS})=d\varepsilon^2-(d-2)^2\varepsilon^4\mathbb E_\theta\|Y\|^{-2}&lt;d\varepsilon^2.\]</div>{% endraw %}

<p>For {% raw %}<span class="math inline">\(Y=\overline X\)</span>{% endraw %} from {% raw %}<span class="math inline">\(n\)</span>{% endraw %} independent {% raw %}<span class="math inline">\(N_d(\theta,I_d)\)</span>{% endraw %} observations, {% raw %}<span class="math inline">\(\varepsilon^2=1/n\)</span>{% endraw %}, so this becomes {% raw %}<span class="math inline">\((1-(d-2)/(n\|\overline X\|^2))\overline X\)</span>{% endraw %}. These exact risk comparisons use the Gaussian location model and squared Euclidean loss. Medians and quantiles require their own distributional and risk arguments; normal approximations alone do not give the same finite-sample dominance theorem.</p>
<h3 data-note-section="4" id="example">4. Example</h3><p>The following archived baseball calculation illustrates shrinkage empirically. Its career batting averages are reference estimates, not known population parameters, and the sampled seasons also contribute to those averages. The observations have unequal binomial sampling variances, the common variance is estimated, and the shrinkage target is an estimated grand mean. Thus the printed error comparison is one descriptive calculation, not a verification of the exact Gaussian dominance theorem. Even in an equal-variance Gaussian model, shrinking the {% raw %}<span class="math inline">\(d-1\)</span>{% endraw %} dimensional residual about an estimated grand mean leads to a {% raw %}<span class="math inline">\(d-3\)</span>{% endraw %} coefficient; the archived code's {% raw %}<span class="math inline">\(N-2\)</span>{% endraw %} is a heuristic choice.</p>

<pre><code># real data ------------------
set.seed(422)
library(Lahman)
# 1. Select 30 players that don&#39;t have missing values and have a good amount of data (total hits &gt; 500)
Batting &lt;- as_tibble(Batting)

players &lt;- Batting %&gt;% 
  group_by(playerID) %&gt;% 
  summarise(AB_total = sum(AB), 
            H_total = sum(H)) %&gt;% 
  na.omit() %&gt;% 
  filter(H_total&gt;500) %&gt;%  # collect players with a lot of data
  sample_n(size=30) %&gt;%    # randomly sample 30 players
  pull(playerID)           # `select` will produce a dataframe, 
# `pull` gives a list which will be easier
# to work with when we `filter` by players

# 2. Get &quot;truth&quot;
TRUTH &lt;- Batting %&gt;% 
  filter(playerID %in% players) %&gt;% 
  group_by(playerID) %&gt;% 
  summarise(AB_total = sum(AB), 
            H_total = sum(H)) %&gt;% 
  mutate(TRUTH = H_total/AB_total) %&gt;% 
  dplyr::select(playerID,TRUTH)

# 3. Collect 5 observations per player 
# 4.Predict truth with MLE and James-Stein Estimator
obs &lt;- Batting %&gt;% 
  filter(playerID %in% players) %&gt;% 
  group_by(playerID) %&gt;%
  do(sample_n(., 5))  %&gt;%       
  group_by(playerID) %&gt;% 
  summarise(AB_total = sum(AB), 
            H_total = sum(H)) %&gt;% 
  mutate(MLE = H_total/AB_total) %&gt;% 
  dplyr::select(playerID,MLE,AB_total) %&gt;% 
  inner_join(TRUTH,by=&quot;playerID&quot;)

# 5. Define variables for James-Stein estimator
p_=mean(obs$MLE)
N = length(obs$MLE)
truth_median = median(obs$AB_total)
df &lt;- obs %&gt;% 
  mutate(sigma2 = (p_*(1-p_))/truth_median,
         JS=p_+(1-((N-2)*sigma2/(sum((MLE-p_)^2))))*(MLE-p_)
         ) %&gt;% 
  dplyr::select(-AB_total,-sigma2)
head(df)

errors &lt;- df %&gt;% 
  mutate(mle_pred_error_i = (MLE-TRUTH)^2,
         js_pred_error_i = (JS-TRUTH)^2) %&gt;% 
  summarise(js_pred_error = sum(js_pred_error_i),
            mle_pred_error = sum(mle_pred_error_i))
errors
# A tibble: 1 × 2
#  js_pred_error mle_pred_error
#          &lt;dbl&gt;          &lt;dbl&gt;
#1       0.00200        0.00298</code></pre>
<h2 data-note-section="5" id="unbiased-estimation-of-risk">5. Unbiased Estimation of Risk</h2><p>Return to {% raw %}<span class="math inline">\(y_j=\theta_j+\varepsilon\xi_j\)</span>{% endraw %}, {% raw %}<span class="math inline">\(j\ge1\)</span>{% endraw %}, with {% raw %}<span class="math inline">\(\theta\in\ell^2\)</span>{% endraw %}. For a class {% raw %}<span class="math inline">\(\Lambda\subset\ell^2\)</span>{% endraw %}, the oracle weights minimize {% raw %}<span class="math inline">\(R(\lambda,\theta)\)</span>{% endraw %} over {% raw %}<span class="math inline">\(\lambda\in\Lambda\)</span>{% endraw %}, when a minimizer exists. They depend on unknown {% raw %}<span class="math inline">\(\theta\)</span>{% endraw %}, so this is a benchmark rather than an estimator. Achieving oracle risk requires an additional theorem for the chosen class and selection rule.</p>

<p>For the first {% raw %}<span class="math inline">\(J\)</span>{% endraw %} coordinates and fixed deterministic weights, an unbiased risk estimate is</p>

{% raw %}<div class="math display">\[\widehat R_J(\lambda)=\sum_{j=1}^J\{(1-\lambda_j)^2y_j^2+(2\lambda_j-1)\varepsilon^2\}.\]</div>{% endraw %}

<p>Indeed {% raw %}<span class="math inline">\(\mathbb E y_j^2=\theta_j^2+\varepsilon^2\)</span>{% endraw %}, and {% raw %}<span class="math inline">\((1-\lambda_j)^2+2\lambda_j-1=\lambda_j^2\)</span>{% endraw %}. This agrees with the SURE formula for a diagonal linear estimator.</p>

<p>One must not sum the unweighted noise terms over infinitely many coordinates. Instead subtract the common unknown quantity {% raw %}<span class="math inline">\(\|\theta\|^2\)</span>{% endraw %} from the target risk and estimate the differences:</p>

{% raw %}<div class="math display">\[\widehat U(\lambda)=\sum_{j\ge1}(\lambda_j^2-2\lambda_j)(y_j^2-\varepsilon^2)+\varepsilon^2\sum_{j\ge1}\lambda_j^2,\qquad \mathbb E_\theta\widehat U(\lambda)=R(\lambda,\theta)-\|\theta\|^2.\]</div>{% endraw %}

<p>For fixed {% raw %}<span class="math inline">\(\lambda\in\ell^2\)</span>{% endraw %}, put {% raw %}<span class="math inline">\(c_j=\lambda_j^2-2\lambda_j\)</span>{% endraw %}. This is bounded and square-summable. The mean series {% raw %}<span class="math inline">\(\sum_jc_j\theta_j^2\)</span>{% endraw %} converges absolutely. Independence and {% raw %}<span class="math inline">\(\operatorname{Var}(y_j^2)=2\varepsilon^4+4\varepsilon^2\theta_j^2\)</span>{% endraw %} imply</p>

{% raw %}<div class="math display">\[\sum_j\operatorname{Var}\{c_j(y_j^2-\varepsilon^2)\}\le2\varepsilon^4\sum_jc_j^2+4\varepsilon^2(\sup_jc_j^2)\sum_j\theta_j^2&lt;\infty.\]</div>{% endraw %}

<p>Thus the random series converges in mean square after centering, proving the stated expectation identity. A finite collection of candidate weights can be compared by minimizing {% raw %}<span class="math inline">\(\widehat U\)</span>{% endraw %}. However, unbiasedness for each fixed candidate does not make the selected minimum an unbiased estimate of the selected estimator's risk. When weights depend smoothly on {% raw %}<span class="math inline">\(y\)</span>{% endraw %}, the derivatives of those weights enter Stein's divergence; nonsmooth selection requires separate analysis. The oracle question therefore remains a selection-risk problem, rather than following from unbiasedness alone.</p>
<nav class="note-series" aria-label="Notes in this series"><p>Previous: <a href="{% post_url 2023-07-17-the-gaussian-sequence-model-and-pinskers-theorem %}">The Gaussian Sequence Model and Pinsker’s Theorem</a></p></nav>

</div>
